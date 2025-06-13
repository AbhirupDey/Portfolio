import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/meokgprb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
      <Head>
        <title>Abhirup Dey | Contact Page</title>
        <meta
          name="description"
          content="Get in touch with Abhirup Dey, a skilled full-stack developer specializing in React.js, Next.js, Express.js and modern web development."
        />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <AnimatedText text="Get in Touch!" className="mb-8" />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-dark mb-4 dark:text-light">Connect with Me</h2>
              <p className="text-lg text-dark/75 dark:text-light/75">
                Whether it's about web development, AI/ML, SaaS solutions, or any exciting tech trend, 
                I'm always open to connecting. Let's create something amazing together!
              </p>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              variants={formVariants}
              className="w-full max-w-3xl mx-auto bg-light rounded-lg shadow-lg p-8"
            >
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div 
                  className="flex flex-col"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="name" className="text-dark font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="p-3 border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div 
                  className="flex flex-col"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="email" className="text-dark font-medium mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="p-3 border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div 
                  className="flex flex-col md:col-span-2"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="message" className="text-dark font-medium mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows="5"
                    required
                    className="p-3 border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div 
                  className="md:col-span-2"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full p-3 bg-dark text-light rounded-lg hover:bg-primary hover:text-dark transition-all font-semibold"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Submit Now →
                  </motion.button>
                </motion.div>
              </form>

              {/* Notification Section */}
              {formStatus === 'success' && (
                <motion.div 
                  className="mt-4 text-green-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div 
                  className="mt-4 text-red-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ❌ Oops! Something went wrong. Please try again later.
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;