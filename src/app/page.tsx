import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 font-mono">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex flex-col lg:flex-row-reverse justify-between items-center">
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-32 border md:mt-0 mb-2">
                                <AvatarImage
                                    alt={DATA.name}
                                    src={DATA.avatarUrl}
                                />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                        <div className="flex-col flex flex-1">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-2xl font-bold tracking-tighter"
                                yOffset={8}
                                text={`${DATA.name}`}
                            />
                            <BlurFadeText
                                className="text-sm mb-1.5"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                            <a
                                href={DATA.locationLink}
                                className="relative inline-block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BlurFadeText
                                    className="text-xs text-muted-foreground"
                                    delay={BLUR_FADE_DELAY}
                                    text={DATA.location}
                                />
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-muted-foreground transition-all duration-300 transform scale-x-0 hover:scale-x-100" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                        <BlurFade
                            key={work.company}
                            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                        >
                            <ResumeCard
                                key={work.company}
                                logoUrl={work.logoUrl}
                                altText={work.company}
                                title={work.company}
                                subtitle={work.title}
                                href={work.href}
                                badges={work.badges}
                                period={`${work.start} - ${
                                    work.end ?? "Present"
                                }`}
                                description={work.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade
                            key={education.school}
                            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                            <ResumeCard
                                key={education.school}
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap justify-between">
                        {DATA.skills.map((skill, id) => (
                            <BlurFade
                                key={skill}
                                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                            >
                                <Badge key={skill}>{skill}</Badge>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">My Projects</h2>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="hackathons">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <h2 className="text-xl font-bold">Hackathons</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {DATA.hackathons.map((project, id) => (
                                <BlurFade
                                    key={project.title + project.dates}
                                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                                >
                                    <HackathonCard
                                        title={project.title}
                                        description={project.description}
                                        location={project.location}
                                        dates={project.dates}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </BlurFade>
                            ))}
                        </ul>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
