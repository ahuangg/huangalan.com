"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PHOTOS, Photo } from "@/data/photos";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

interface PhotoWithMetadata extends Photo {
    metadata: {
        location: string | null;
        date: string | null;
        device: string | null;
    };
    rawDate?: Date | null;
}

export default function PhotosPage() {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    const [photosWithMetadata, setPhotosWithMetadata] = useState<PhotoWithMetadata[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMetadata() {
            const photosWithMeta = await Promise.all(
                PHOTOS.map(async (photo) => {
                    try {
                        const response = await fetch(
                            `/api/photo-metadata?path=${encodeURIComponent(photo.src)}`
                        );
                        const exifData = await response.json();

                        return {
                            ...photo,
                            metadata: {
                                location: photo.location || exifData.location || "Unknown location",
                                date: photo.date || exifData.date || "Unknown date",
                                device: photo.device || exifData.device || "Unknown device",
                            },
                            rawDate: exifData.rawExif?.DateTimeOriginal
                                ? new Date(exifData.rawExif.DateTimeOriginal)
                                : null,
                        };
                    } catch (error) {
                        console.error(`Error loading metadata for ${photo.src}:`, error);
                        return {
                            ...photo,
                            metadata: {
                                location: photo.location || "Unknown location",
                                date: photo.date || "Unknown date",
                                device: photo.device || "Unknown device",
                            },
                            rawDate: null,
                        };
                    }
                })
            );

            // Sort by date (most recent first)
            photosWithMeta.sort((a, b) => {
                const dateA = a.rawDate ? a.rawDate.getTime() : 0;
                const dateB = b.rawDate ? b.rawDate.getTime() : 0;
                return dateB - dateA;
            });

            setPhotosWithMetadata(photosWithMeta);
            setLoading(false);
        }

        if (PHOTOS.length > 0) {
            loadMetadata();
        } else {
            setLoading(false);
        }
    }, []);

    // Hide navbar when photo dialog is open
    useEffect(() => {
        if (selectedPhoto !== null) {
            document.body.classList.add('hide-navbar');
        } else {
            document.body.classList.remove('hide-navbar');
        }
        return () => {
            document.body.classList.remove('hide-navbar');
        };
    }, [selectedPhoto]);

    const selectedPhotoData = selectedPhoto !== null
        ? photosWithMetadata.find(p => p.id === selectedPhoto)
        : null;

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 font-mono">
            <section id="photos">
                <div className="mx-auto w-full max-w-5xl space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="text-3xl font-bold tracking-tighter">
                            Photo Gallery
                        </h1>
                        <p className="text-sm text-muted-foreground mt-2">
                            A collection of moments captured through my lens
                        </p>
                    </BlurFade>

                    {loading ? (
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="text-center py-20 text-muted-foreground">
                                <p className="text-lg">Loading photos...</p>
                            </div>
                        </BlurFade>
                    ) : PHOTOS.length === 0 ? (
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="text-center py-20 text-muted-foreground">
                                <p className="text-lg">No photos yet.</p>
                                <p className="text-sm mt-2">
                                    Add photos to src/data/photos.tsx and place images in public/photos/
                                </p>
                            </div>
                        </BlurFade>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {photosWithMetadata.map((photo, idx) => (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                                >
                                    <button
                                        onClick={() => setSelectedPhoto(photo.id)}
                                        className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer w-full block"
                                    >
                                        <div className="relative w-full pb-[100%] overflow-hidden">
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                loading="lazy"
                                            />
                                        </div>
                                        <motion.div
                                            className="p-4 space-y-1 text-left"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <p className="text-xs font-mono text-muted-foreground">
                                                {photo.metadata.date}
                                            </p>
                                            <p className="text-xs font-mono text-muted-foreground truncate">
                                                {photo.metadata.location}
                                            </p>
                                            <p className="text-xs font-mono text-muted-foreground truncate">
                                                {photo.metadata.device}
                                            </p>
                                        </motion.div>
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <AnimatePresence>
                {selectedPhoto !== null && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 backdrop-blur-sm"
                            style={{ margin: '-100px' }}
                        />
                        <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)} modal={false}>
                            <DialogContent className="max-w-2xl p-6 overflow-hidden !border-0 [&>button]:hidden z-50">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {selectedPhotoData && (
                                        <div className="relative bg-background">
                                            <div className="relative w-full aspect-[1/1] overflow-hidden bg-black mb-6">
                                                <Image
                                                    src={selectedPhotoData.src}
                                                    alt={selectedPhotoData.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, 672px"
                                                    priority
                                                />
                                            </div>
                                            <motion.div
                                                className="space-y-1"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1, duration: 0.3 }}
                                            >
                                                <DialogTitle className="sr-only">
                                                    {selectedPhotoData.alt}
                                                </DialogTitle>
                                                <motion.p
                                                    className="text-sm font-mono text-muted-foreground"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.15, duration: 0.3 }}
                                                >
                                                    {selectedPhotoData.metadata.date}
                                                </motion.p>
                                                <motion.p
                                                    className="text-sm font-mono text-muted-foreground"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2, duration: 0.3 }}
                                                >
                                                    {selectedPhotoData.metadata.location}
                                                </motion.p>
                                                <motion.p
                                                    className="text-sm font-mono text-muted-foreground"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.25, duration: 0.3 }}
                                                >
                                                    {selectedPhotoData.metadata.device}
                                                </motion.p>
                                            </motion.div>
                                        </div>
                                    )}
                                </motion.div>
                            </DialogContent>
                    </Dialog>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}
