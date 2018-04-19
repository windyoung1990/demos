import React, { Component } from 'react';
import { BlogList } from '../BlogList/BlogList';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: []
        };
        this.showBlogList = this.showBlogList.bind(this);
    }
    componentDidMount() {
        const blogList = [
            {
                id:1,
                author:'zyn',
                body:'这是blog内容111'
            },
            {
                id:2,
                author:'zyn',
                body:'这是blog内容222'
            }
        ];
        this.setState({
            blogList
        });
    }
    showBlogList() {
        console.log(this.state.blogList);
    }
    render() {
        const { blogList } = this.state;
        return (
            <div>
                {BlogList(blogList)}
                <button type="button" onClick={this.showBlogList}>点击我</button>
            </div>
        )
    }
}
export default Blog
