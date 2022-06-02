import React from 'react';
import me from '../../img/me.jpg';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { BiBookContent } from 'react-icons/bi';

const Header = () => {
    return (
        <header>

            <div class="user">
                <img src={me} alt="" />
                <h3 class="name">Tazul Islam Rakib</h3>
                <ul>
                    <li><a href="https://github.com/Developer-Rakib" target="_blank" rel="noopener noreferrer"><GoMarkGithub></GoMarkGithub></a></li>
                    <li><a href="https://www.linkedin.com/in/developer-rakib1/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption></GrLinkedinOption></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100006549750347" target="_blank" rel="noopener noreferrer"><CgFacebook></CgFacebook></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter></AiOutlineTwitter></a></li>
                </ul>
            </div>

            <nav class="navbar">
                <ul>
                    <li><a href="#home"><AiOutlineHome style={{marginRight:'10px'}}></AiOutlineHome> Home</a></li>
                    <li><a href="#about"><FiUser style={{marginRight:'10px'}}></FiUser> about</a></li>
                    {/* <li><a href="#education">education</a></li> */}
                    <li><a href="#portfolio"><BiBookContent style={{marginRight:'10px'}}></BiBookContent> portfolio</a></li>
                    <li><a href="#contact"><RiContactsBookLine style={{marginRight:'10px'}}></RiContactsBookLine> Contact</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;