import React, { useCallback } from 'react'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import bulogo from '../assets/bulogo.jpg'
import liulogo from '../assets/liulogo.jpg'
import ibmlogo from '../assets/ibmlogo.png'
import vslogo from '../assets/vslogo.png'
import aslogo from '../assets/aslogo.png'
import neatlogo from '../assets/neatlogo.jpg'
import cmuLogo from '../assets/cmuLogo.png'
import mixpanelLogo from '../assets/mixpanelLogo.png'
import fbavatar from '../assets/fbavatar.jpg'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Particles from 'react-tsparticles'
import { loadSnowPreset } from 'tsparticles-preset-snow'

const IndexPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine)
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      <section className="hero is-medium is-dark is-relative">
        <Particles
          init={particlesInit}
          options={{
            preset: 'snow',
            style: {
              position: 'absolute',
            },
            particles: {
              move: {
                direction: 'top',
              },
              size: {
                value: {
                  min: 1,
                  max: 3,
                },
                wobble: {
                  distance: 20,
                  enable: true,
                  speed: {
                    min: -1,
                    max: 1,
                  },
                },
              },
            },
          }}
        />
        <div className="hero-body">
          <div className="container has-text-centered">
            <Avatar />
            <h1 className="title" style={{ fontSize: 48 }}>
              Hans Li
            </h1>
            <h2 className="subtitle">Fullstack Software Engineer</h2>
            <a
              className="icon is-large has-text-grey-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hans-lizihan"
            >
              <Icon icon={['fab', 'github']} size="2x" />
            </a>
            <a
              className="icon is-large has-text-grey-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hanslizihan/"
            >
              <Icon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a
              className="icon is-large has-text-grey-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/HansLee0328"
            >
              <Icon icon={['fab', 'facebook']} size="2x" />
            </a>
            <a
              className="icon is-large has-text-grey-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/lizihan0328"
            >
              <Icon icon={['fab', 'twitter']} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <section className="hero is-small is-light">
        <div className="hero-body container content has-text-centered">
          <p className="title">
            <code>$ whoami</code>
          </p>
          <p>
            I have been working here in Hong Kong for <b>5 years</b>. I started
            as <strong>Frontend Developer</strong> and start to contribute
            heavily in <strong>backend</strong> as well. Recently I have been
            working with <strong>DevOps</strong> and trying to bring more
            automation in whole development process.
          </p>
          <p>
            I came to US for master degree and started working here after
            graduation. Currently live in San Mateo and work in San Francisco.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-info">
                  <p className="title">Fun Fact</p>
                  <div className="content">
                    <p>I am a 25% Mongolian according to DNA tests.</p>
                  </div>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">
                    Music <small className="subtitle">Classic & Rock</small>
                  </p>
                  <div className="content">
                    <span
                      className="tag is-danger is-light"
                      style={{ marginRight: 8 }}
                    >
                      AC/DC
                    </span>
                    <span
                      className="tag is-info is-light"
                      style={{ marginRight: 8 }}
                    >
                      2 Cellos
                    </span>
                    <span
                      className="tag is-info is-light"
                      style={{ marginRight: 8 }}
                    >
                      万能青年旅店
                    </span>
                    <span
                      className="tag is-danger is-light"
                      style={{ marginRight: 8 }}
                    >
                      Hans Zimmer
                    </span>
                    <span className="tag is-success is-light">Led Zepplin</span>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-light">
                  <figure className="image is-1by1">
                    <img src={fbavatar} alt="Hans Avatar" />
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-pink">
                <p className="title">Teenage</p>
                <div className="content">
                  <p>
                    I went to <b>Beijing No. 80 High School</b> for both of my
                    junior high school and senior high school education. (yeah I
                    hear you... I sincerely have no idea how many high schools
                    are there in Beijing)
                  </p>
                  <p>
                    A fun part of my middle school is when I entered the junior
                    High School in CBD area (白家庄) in Beijing in 2005, one of
                    the building in my school was the tallest one, 6 floors.
                    However after I graduated in 2008, the area has been
                    developed a lot. The 6 floor building seems a hobbit inside
                    a bunch of normal terran. The sad thing is we lost our
                    sunset forever - the tall buildings blocked them.
                  </p>
                  <p>
                    My high schools was a board school. By then iTouch and
                    iPhone was just released. We were crazy about those games in
                    first or second generation of i-devices. I learned to
                    jailbreak iPhone at that time, because I've got a iPhone 3gs
                    but it's those batch locked in with AT&T. So to use them
                    there are no way but to crack them. Good old days,
                    blackra1n, purplera1n. I think those jailbreak experiences
                    was one of the reason why I started my professional software
                    engineer (though I am not focused on hacking phones or
                    anything related to security).
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
              <div className="content">
                <p className="title">Childhood</p>
                <p className="subtitle">My origin</p>
                <div className="content">
                  <p>
                    I was born in <em>Taiyuan, Shanxi Province, China.</em> I
                    spent my first 7 years in that city. All I remember now is
                    the fun but warm dialects and <b>Red Alert</b> as well as{' '}
                    <b>StarCraft</b>. I started playing piano and learn about
                    chess.
                  </p>
                  <p>
                    I went to primary school in <em>Beijing, China</em>. I
                    started reading at age of 7. I succesfully proved that it
                    takes 7 years for a Chineses lad to finally read Chinese. So
                    be patient, if you can't master this language, most likely
                    it's not your fault.
                  </p>
                  <p>
                    My primary school was delightful, I met quite some rich kids
                    in the class. They was just normal kids back then. We do
                    stupid things together and went to play football when the
                    largest sandstorm strike Beijing. We have no fear toward
                    power at all back then.
                  </p>
                  <p>
                    Oh, of course, like every boy, I was devoted to games.
                    Pokemon, Need for Speed, a bunch of RPG games like 剑侠情缘.
                    But among all of them, I love a black and white game on my e
                    dictionary most. It was called 伏魔记 (A Conquest to the
                    Demon). The best part about playing games on your
                    e-dictionary is your parent never know that you were playing
                    games.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="timeline is-centered">
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://hkbu.edu.hk">
                  <img src={bulogo} alt="HKBU Logo" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Sep 2011</p>
                <p>
                  Hong Kong Baptist University Major In Computer Science(HKBU)
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://liu.se/">
                  <img src={liulogo} alt="Linkoping University" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Sep 2013 - Jan 2014</p>
                <p>Exchange Student, Linkoping University</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://www.ibm.com/">
                  <img src={ibmlogo} alt="IBM" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">June 2014 - Oct 2014</p>
                <p>Intern, IBM GBS Hong Kong</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://www.venture-solutions.com/">
                  <img src={vslogo} alt="venture solutions" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Oct 2014 - May 2015</p>
                <p>Developer Intern, Venture Solutions (Hong Kong)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <Icon icon="graduation-cap" />
              </div>
              <div className="timeline-content">
                <p className="heading">June 2016</p>
                <p>Graduated, HKBU</p>
              </div>
            </div>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-image is-48x48">
                <a href="https://www.aftership.com/">
                  <img src={aslogo} alt="aftership" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">July 2016 - Aug 2020</p>
                <p>Senior Software Engineer, AfterShip Ltd.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://www.neatcommerce.com/">
                  <img src={neatlogo} alt="neat" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Oct 2018 - Aug 2020</p>
                <p>Senior Fullstack Software Engineer, Neat Ltd</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://www.cmu.edu/">
                  <img src={cmuLogo} alt="CMU" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Sep 2020 - Dec 2021</p>
                <p>MS Software Engineer</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <Icon icon="graduation-cap" />
              </div>
              <div className="timeline-content">
                <p className="heading">Dec 2022</p>
                <p>Graduated, CMU</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-48x48">
                <a href="https://www.mixpanel.com">
                  <img src={mixpanelLogo} alt="mixpanel" />
                </a>
              </div>
              <div className="timeline-content">
                <p className="heading">Jan 2022 - Current</p>
                <p>Sr. Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
