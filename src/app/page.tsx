"use client"

import React from 'react'
import { motion } from 'framer-motion';

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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* API 1 */}
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="tradalite-api.png"
                alt="API Project 1"
                className="w-full rounded"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">Fintech API</h3>
              <p className="mt-2 text-gray-600">
                A cross border payment solutions for remote workers; assign NGN, USD, EUR, etc. wallets to clients, accept payment from in USD, EUR, NGN, exchange one currency to the other, sell and buy giftcards, virtual local and foreign account numbers and credit cards
              </p>
              <a
                href="https://documenter.getpostman.com/view/13650645/2sA3Bt3pps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View the doc {"(private repo)"} →
              </a>
            </div>

            {/* API 2 */}
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="emr-api.png"
                alt="API Project 2"
                className="w-full rounded"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">Labour Ward Health Tracker</h3>
              <p className="mt-2 text-gray-600">
                An API for tracking user health metrics and habits in the labour ward.
              </p>
              <a
                href="https://documenter.getpostman.com/view/13650645/2sA3BuWob6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View the doc {"(private repo)"} →
              </a>
            </div>
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