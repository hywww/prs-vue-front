let host = '/api';

export default {
    list: host + '/get/list',
    detail: host + '/get/list/detail',
    getSyntax: host + '/get/list/syntax',
    getParam: host + '/get/list/param',
    addQuestion: host + '/save/feedback/item',
    addResponse: host + '/save/add/responseItem',
    problemList: host + '/get/feedback/list',
    getCode: host + '/get/sourceCode'
}