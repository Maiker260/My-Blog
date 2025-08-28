import Post from "./Post.jsx";

function PostsContainer() {
    return (
        <div className="p-2.5 h-full max-h-[calc(100vh-120px)] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 overflow-auto scrollbar-none">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostsContainer;
