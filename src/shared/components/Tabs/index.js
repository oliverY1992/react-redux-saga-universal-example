import React, {Component, PropTypes} from 'react';
import style from './Tabs.scss';

export default class Tabs extends Component{
    static propTypes = {
        items:PropTypes.array.isRequired,
        onTabChange:PropTypes.func
    };
    static defaultProps = {
        items:[]
    };
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0
        };
        //this.handleChangeTab = this.handleChangeTab.bind(this);
    }
    handleChangeTab(index){
        if(this.state.activeIndex === index) return;
        this.setState({
            activeIndex:index
        });
    }
    render(){
        const {items} = this.props;
        const {
            tabs,
            'tabs-nav': tabsNav,
            'tabs-nav-item':tabsNavItem,
            'tabs-content':tabsContent,
            'tabs-pane':tabsPane
        } = style;
        return (
            <div className={tabs}>
                <ul className={tabsNav}>
                    {
                        items.map((item, index) => {
                            const {title} = item;
                            return <li className={tabsNavItem} onClick={() => this.handleChangeTab(index)}
                                       style={this.state.activeIndex === index ? {color:'coral'} : undefined}
                                       key={index}><a>{title}</a></li>
                        })
                    }
                </ul>
                <div className={tabsContent}>
                    {
                        items.map((item, index) => {
                            const {content} = item;
                            return <div className={tabsPane} style={this.state.activeIndex === index ? {display:'block'} : undefined}
                                        key={index}>{content}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}