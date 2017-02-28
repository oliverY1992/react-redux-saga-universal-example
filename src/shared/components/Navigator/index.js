import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import style from './Navigator.scss';
import imgUrl from '../../../../static/assets/GitHub-Mark-64px.png';

const Navigator = props => {
    const {handleSearch} = props;
    const {
        navigator,
        container,
        nav,
        clear,
        'nav-item':navItem,
        'pull-left':pullLeft,
        'pull-right':pullRight,
    } = style;
    return (
        <div className={navigator}>
            <div className={`${container}`}>
                <div className={`${nav} ${pullLeft}`}>
                    <a><img src={imgUrl} style={{width:16, height:16}}/></a>
                    <span>Github</span>
                    <input style={{width:96}} type="text" placeholder="Search" onKeyUp={handleSearch}/>
                </div>
                <ul className={`${nav} ${pullLeft}`}>
                    <li className={navItem}><Link to="/pull">Pull request</Link></li>
                    <li className={navItem}><Link to="/issues">Issues</Link></li>
                    <li className={navItem}><Link to="/Gist">Gist</Link></li>
                </ul>
                <ul className={`${nav} ${pullRight}`}>
                    <li className={navItem}><Link to="/">Notification</Link></li>
                    <li className={navItem}><Link to="/">New</Link></li>
                    <li className={navItem}><Link to="/">Yours</Link></li>
                </ul>
            </div>
        </div>
    )
};
Navigator.propTypes = {
    handleSearch:PropTypes.func.isRequired
};

export default Navigator;