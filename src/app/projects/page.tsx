import React from "react";
import ProjectCard from '../components/ProjectCard';
import Grid from "../components/Grid";

export default function Projects() {
    return (
        <div>
            <section className="py-10">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
                <div className="padx my-[20px]">
                    <Grid minw="300px">
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
                    </Grid>
                </div>
            </section>
        </div>
    );
}


