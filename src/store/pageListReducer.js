import {UPDATE_HTML_PAGES_LIST} from './updatePagesList';
const pageListReducer = (state ={}, {type, payload}) => {
      switch(type) {
             case UPDATE_HTML_PAGES_LIST :
             return payload
             default :
     return state
};
};
export default pageListReducer;