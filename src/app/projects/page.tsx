import React from "react";
import ProjectCard from '../components/ProjectCard';
import Grid from "../components/Grid";

export default function Projects() {
    return (
        <div className="padx">
            <section className="py-10">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
                <div className="padx my-[20px]">
                    <Grid minw="300px">
                        <ProjectCard
                            title="RillVote"
                            description="RillVote is an innovative online voting solution to conduct secure, efficient, and transparent elections for organizations. Whether for corporate elections, associations, or community groups, RillVote is designed to enhance the election experience while maintaining high standards of security, accuracy, and accountability"
                            image="rillvote.png"
                            link="https://www.rillvote.com"
                        />
                        <ProjectCard
                            title="Tradalite"
                            description="A cross border payment solutions for remote workers; assign NGN, USD, EUR, etc. wallets to clients, accept payment from in USD, EUR, NGN, exchange one currency to the other, sell and buy giftcards, virtual local and foreign account numbers and credit cards"
                            image="tradalite.png"
                            link="https://tradalite.vercel.app"
                        />
                        <ProjectCard
                            title="Labour Ward Tracker"
                            description="An Electronic Health Tracker; it tracks patients' health records and labour activities in the labour ward"
                            image="emr_ui.png"
                            link="https://lwr-emr.vercel.app"
                        />
                        <ProjectCard
                            title="EMR"
                            description="An Electronic Health Record. login username: drmo, password: m"
                            image="emr_main.png"
                            link="https://waterdroplets.vercel.app"
                        />
                    </Grid>
                </div>
            </section>
        </div>
    );
}


