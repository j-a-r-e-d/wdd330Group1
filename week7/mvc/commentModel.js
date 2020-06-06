class CommentModel {
    constructor(hikeId = null, content = '', type = 'hike') {
        this.hikeId = hikeId;
        this.content = content;
        this.date = new Date();
        this.type = type;
        this.commentList = this.readFromLS('comments') || [];
    }

    readFromLS(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    writeToLS(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    getAllComments() {
        return this.commentList;
    }

    addComment(hikeId, content) {
        const newComment = new CommentModel(hikeId, content);
        this.commentList.push(newComment);
        this.writeToLS('comments', this.commentList);
    }
}

class CommentView {

    renderCommentUI(element) {
        element.innerHTML = `
            <div class="add-comment"
                <h2>Add a comment</h2>
                <input type="text" id="comment-entry">
                <button id="add-comment">Comment</button>
            </div>`;
    }
}

export default class Comment {
    constructor() {
        this.model = new CommentModel();
        this.view = new CommentView();
    }
    addCommentListener(hikeId) {
        document.querySelector('#add-comment').onclick = () => {
            const content = document.querySelector('#comment-entry').value;
            this.model.addComment(hikeId, content);
        }
    }

    getCommentList() {
        return this.model.getAllComments();
    }

    displayCommentView(element) {
        return this.view.renderCommentUI(element);
    }
}