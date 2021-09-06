export const UPDATE_HTML_PAGES_LIST = "UPDATE_HTML_PAGES_LIST";
const updatePagesList = {
      type: UPDATE_HTML_PAGES_LIST,
      payload: [{id:1, data: { attributes: { html: '<h1>Hello World</h1>' } } }]
};
export default updatePagesList;