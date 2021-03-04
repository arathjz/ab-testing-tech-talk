import * as React from "react"
import clsx from 'clsx';
import illustrationOne from '../images/illustration-one.svg'
import illustrationTwo from '../images/illustration-two.svg'
import './styles.scss';

const BRANCH = process.env.BRANCH;

const IndexPage = () => {
  const isMainBranch = BRANCH === 'main';
  
  return (
    <main className="container">
      <div className="content">
        <h1>A/B Testing</h1>
        <section className="section">
          <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <img src={illustrationOne} alt=""/>
          </div>
        </section>
        <section className="section">
          <div>
          <img src={illustrationTwo} alt=""/>
            <button id="read-more" className={clsx({
              'read-more-bottom': !isMainBranch,
              'read-more-top': isMainBranch,
            })} onClick={() => alert('Reading more!')}>Read more</button>
            <button id="tweet" onClick={() => alert('Tweeting!')}>Tweet</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default IndexPage
