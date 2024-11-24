import React from "react";
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <div>
            <section className="py-10">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
                <div className="flex flex-wrap justify-center mt-6">
                    <ProjectCard
                        title="RillVote"
                        description="An online voting platform for associations to create free merchant accounts, manage polls, and conduct elections."
                        image="rillvote.png"
                        link="https://www.rillvote.com"
                    />
                    <ProjectCard
                        title="Tradalite"
                        description="A dynamic platform for trading and business operations."
                        image="tradalite.png"
                        link="https://tradalite.vercel.app"
                    />
                    <ProjectCard
                        title="EMR"
                        description="An Electronic Health Record to track patint health records in the labour ward"
                        image="emr_ui.png"
                        link="https://lwr-emr.vercel.app"
                    />
                </div>
            </section>
        </div>
    );
}


