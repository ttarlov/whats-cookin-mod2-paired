const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');
const Recipe = require('../src/recipe');

const userData = require('../data/users');
const recipeData = require('../data/recipes');

describe('User', function(){
  let user;
  let userInfo;
  let recipe1;
  let recipe2;

  beforeEach(function() {
    userInfo = userData[0];
    user = new User(userInfo);
  })

  it('should be a function', function(){
    expect(User).to.be.a('function');
  });

  it('should be instance of User', function(){
    expect(user).to.be.an.instanceof(User);
  });

  it('should initialize with a name', function(){
    expect(user.name).to.equal('Saige O\'Kon')
  });

  it('should initialize with an id', function(){
    expect(user.id).to.equal(1);
  });

  it('should initilize with a personal pantry', function(){
    expect(user.pantry).to.equal(userInfo.pantry)
  });

  it('should initilize with an empty favoriteRecipes', function(){
    expect(user.favoriteRecipes).to.deep.equal([]);
  });


  it('should start with empty recipes to cook', function(){
    expect(user.recipesToCook).to.deep.equal([])
  });


  describe('addToMyFavoriteRecipes Method', function(){

    it('should be able to add recipes to favoriteRecipes', function(){
      expect(user.favoriteRecipes.length).to.deep.eq(0);
      recipe1 = new Recipe(recipeData[0]);
      user.addToMyFavoriteRecipes(recipe1)
      expect(user.favoriteRecipes.length).to.deep.eq(1);
    });


  });


});
