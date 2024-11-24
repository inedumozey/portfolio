"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Grid from './components/Grid';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50 text-center">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="profile.jpg"
            alt="Inedu Moses"
            className="w-40 h-40 mx-auto rounded-full shadow-lg"
          />
          <h1 className="text-5xl font-bold mt-6 text-gray-800">Inedu Moses</h1>
          <p className="mt-4 font-bold md:text-[2rem] text-[1.5rem] text-gray-600">
            Medical Doctor | Software Developer | Innovator
          </p>
          <p className="mt-2 text-gray-500">
            Crafting scalable backend systems and APIs with a focus on reliability and performance.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-white">
        <motion.div
          className="container mx-auto text-center max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Technical Skills</h2>
          <p className="mt-4 text-gray-600">
            My expertise spans a wide range of technologies:
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 font-semibold text-[1rem]">
            <span>Node.js</span>
            <span>NestJS</span>
            <span>Express.js</span>
            <span>ReactJs</span>
            <span>NextJs</span>
            <span>MongoDB</span>
            <span>SQL</span>
            <span>Redis</span>
            <span>REST APIs</span>
            <span>GraphQL</span>
            <span>Clound computing</span>
            <span>Version control systems</span>
          </div>
        </motion.div>
      </section>

      {/* Featured APIs Section */}
      <section className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800">Backend APIs</h2>
          <p className="mt-4 text-center text-gray-600">
            Explore my backend systems and API projects.
          </p>
          <div className="padx my-[20px]">
            {/* API 1 */}
            <Grid minw='300px'>
              <ProjectCard
                title="Fintech API"
                description="A cross border payment solutions for remote workers; assign NGN, USD, EUR, etc. wallets to clients, accept payment from in USD, EUR, NGN, exchange one currency to the other, sell and buy giftcards, virtual local and foreign account numbers and credit cards"
                image="tradalite-api.png"
                link="https://documenter.getpostman.com/view/13650645/2sA3Bt3pps"
                button={`View the doc (private repo) →`}
              />

              {/* API 2 */}
              <ProjectCard
                title="Labour Ward Health Tracker"
                description="An API for tracking user health metrics and habits in the labour ward"
                image="emr-api.png"
                link="https://documenter.getpostman.com/view/13650645/2sA3BuWob6"
                button={`View the doc (private repo) →`}
              />

            </Grid>
          </div>
        </motion.div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Why Hire Me?</h2>
          <div className="text-center text-gray-600">
            With a unique blend of healthcare experience and technical expertise, I offer:
          </div>

          <ul className="mt-6 space-y-4 text-left text-gray-700">
            <li className='text-center'>✅ Proven expertise in building scalable and secure backend systems.</li>
            <li className='text-center'>✅ Strong problem-solving skills honed through my medical career.</li>
            <li className='text-center'>✅ A passion for innovation and delivering impactful solutions.</li>
            <li className='text-center'>✅ Excellent collaboration and communication skills.</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
