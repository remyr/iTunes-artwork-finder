require('es6-promise').polyfill();
require('isomorphic-fetch');
import constants from '../constants/index'
import $ from 'jquery'

let actions = {

    search: function(query, language){
        const query_url = `http://itunes.apple.com/search?entity=album&term=${query}`;
        return (dispatch) => {
            dispatch(actions.loading());
            $.ajax({
                type: 'GET',
                url: query_url,
                dataType: 'jsonp',
                cache: true
            }).done(function (data) {
                dispatch(actions.searchToState(data.results));
            }).fail();
        }
    },

    searchToState: function(data){
        return {
            type: constants.SEARCH_TO_STATE,
            data: data
        }
    },

    loading: function(){
        return {
            type: constants.IS_LOADING
        }
    },

    resetData: function(){
        return {
            type: constants.RESET_DATA
        }
    }

}

export default actions