var React = require('react');
var chai = require('chai');
var expect = chai.expect;
var sd = require('skin-deep');
var Posts = require('../components/Posts.js');

describe('Posts', function () {
  var vdom, instance, tree;

  beforeEach(function () {
    tree = sd.shallowRender(
      <Posts />
    );

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it('should render with a correct class name', function () {
    expect(vdom.props.className).to.eql('posts');
  });

  it('should have a list title', function () {
    expect(tree.textIn('.posts__title')).to.eql('Post title');
  });

  it('should render two Posts', function () {
    expect(vdom.props.children.length).to.eql(2);
  });

  describe('#_createPost', function () {
    it('should return that a post has been created', function () {
      expect(instance._createPost()).to.eql('Post created');
    });
  });
});
