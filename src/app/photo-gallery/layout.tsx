import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery",
};

export default function PhotoGalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
