/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Loop through each feed in the allFeeds object,
     * ensure that it has a URL defined and that the URL is not empty.
     */
    it('URLs are not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* Loop through each feed in the allFeeds object,
     * ensure that it has a name defined and that the name is not empty.
     */
     it('names are not empty', function() {
       allFeeds.forEach(function(feed) {
         expect(feed.name).toBeDefined();
         expect(feed.name.length).not.toBe(0);
       });
     });
  });


  /* "The menu" Test Suite */
  describe('The Menu', function() {

    /* Ensure the menu element is hidden by default. */
     it('is hidden by default', function() {
       expect($('body').hasClass('menu-hidden')).toBe(true);
     });

    /* Ensure the menu changes visibility when the menu icon is clicked.
     * The menu displays when clicked, and hides when clicked again.
     */
     it('can be toggled on and off', function() {

       // when the menu icon is clicked once:
       $('.menu-icon-link').click();
       expect($('body').hasClass('menu-hidden')).toBe(false);

       // when the menu icon is clicked again:
       $('.menu-icon-link').click();
       expect($('body').hasClass('menu-hidden')).toBe(true);

     });

  });

  /* "Initial Entries" Test Suite */
  describe('Initial Entries', function() {

    /* Ensure when the loadFeed function is called and completes
     * its work, there is at least a single .entry element within
     * the .feed container.
     */

     beforeEach(function(done) {
       loadFeed(0, function() {
         done();
       });
     });

     it('at least one entry exists', function(done) {
       expect($('.feed').children().length).toBeGreaterThan(0);
       done();
     });

  });

  /* "New Feed Selection" Test Suite */
  describe('New Feed Selection', function() {

    var feed1, feed2;
    /* Ensure that when a new feed is loaded
     * by the loadFeed function, the content actually changes.
     */
     beforeEach(function(done) {
       loadFeed(0, function() {
         feed1 = $('.feed').html();
         loadFeed(1, function() {
           feed2 = $('.feed').html();
           done();
         });
       });
     });

     it('is different from the old', function(done) {
       expect(feed1).not.toBe(feed2);
       done();
     });

  });

}());
