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


  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
