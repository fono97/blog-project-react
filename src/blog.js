import React from "react";

 const Header = (props) =>{
     return (
                <div className="blog">
                    <header>
                        <div className ="header-title">
                            <div className="logo-nav">
                                <div className="logo">
                                    <img src="./images/logo.png" alt="computer-science-logo" />
                                </div>
                                <p className="title-blog">web development projects</p>
                            </div>
                            <nav className="navbar">
                                <ul>
                                    <li>home</li>
                                    <li>about</li>
                                    <li>projects</li>
                                    <li>sign in</li>
                                    <li>sign up</li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <main>
                        <section>
                            <h2>These are all projects</h2>
                            <div className="all-posts">
                                <article>
                                    <div className="post">
                                        <p>post</p>
                                        <div>
                                            <p>view post</p>
                                        </div>
                                    </div>
                                    <p>Title</p>
                                </article>
                            </div>
                        </section>
                    </main>

                    <aside>
                        <p>he</p>
                    </aside>

                    <footer>
                        <p>hey</p>
                    </footer>
                </div>
     )
     
 }
 export default Header;