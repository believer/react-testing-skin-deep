var React = require('react');
var Post = require('./Post');

var Posts = React.createClass({
  _createPost: function () {
    return 'Post created';
  },

  _renderPosts: function () {
    var posts = [
      {
        title: 'Testing'
      },
      {
        title: 'Code'
      }
    ];

    return posts.map((post, i) => {
      return (
        <Post
          {...post}
          key={'post' + i} />
      );
    })
  },

  render: function() {
    return (
      <div className="posts">
        <h1 className="posts__title">Post title</h1>
        {this._renderPosts()}
      </div>
    );
  }

});

module.exports = Posts;
