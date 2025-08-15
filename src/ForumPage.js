import React, { useState } from "react";
import './ForumPage.css';

export default function ForumPage() {
  const [topics, setTopics] = useState([
  {
    id: 1,
    title: "How to track mood changes effectively?",
    author: "Priya S.",
    posts: [
      { id: 1, author: "Priya S.", text: "I use journaling alongside the app. 🌸" },
      { id: 2, author: "Aisha K.", text: "Meditation helps me feel better mentally. 💬" },
      { id: 3, author: "Neha M.", text: "Exercise also greatly improves my mood! 🏋️‍♀️" },
    ],
  },
  {
    id: 2,
    title: "PCOS and irregular cycles experience",
    author: "Deepa L.",
    posts: [
      { id: 1, author: "Deepa L.", text: "Has anyone found natural remedies helpful? 🍃" },
      { id: 2, author: "Sana R.", text: "I found dietary changes to be the most effective for me." },
    ],
  },
  {
    id: 3,
    title: "Best foods for hormonal balance?",
    author: "Meera T.",
    posts: [
      { id: 1, author: "Meera T.", text: "I’m looking for recommendations on foods that help hormonal health. 🥑" },
      { id: 2, author: "Priya S.", text: "Include flaxseeds and nuts in your diet, they helped me a lot!" },
      { id: 3, author: "Lina K.", text: "Also consider avoiding processed sugars and saturated fats." },
    ],
  },
  {
    id: 4,
    title: "Managing stress during menstrual cycles",
    author: "Anita P.",
    posts: [
      { id: 1, author: "Anita P.", text: "Stress hits me hard preperiod. Any coping tips?" },
      { id: 2, author: "Neha M.", text: "Taking a short walk and deep breathing exercises help me a lot." },
      { id: 3, author: "Aisha K.", text: "Meditation apps are lifesavers! Highly recommend." },
    ],
  },
  {
    id: 5,
    title: "Recommendations for fertility tracking apps",
    author: "Sana R.",
    posts: [
      { id: 1, author: "Sana R.", text: "What apps are the best for fertility and ovulation tracking?" },
      { id: 2, author: "Deepa L.", text: "HerCare Buddy offers really accurate predictions!" },
      { id: 3, author: "Lina K.", text: "I use multiple apps, but HerCare Buddy's AI insights stand out." },
    ],
  },
  {
    id: 6,
    title: "How to improve sleep quality naturally?",
    author: "Lina K.",
    posts: [
      { id: 1, author: "Lina K.", text: "Struggling with sleep during PMS, looking for natural tips." },
      { id: 2, author: "Anita P.", text: "Cut caffeine after 2 PM and try chamomile tea before bed." },
      { id: 3, author: "Priya S.", text: "Limiting screen time 1 hour before bed really helps me." },
    ],
  },
]);
  const [newTopic, setNewTopic] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [newPost, setNewPost] = useState("");

  function addTopic() {
    if (newTopic.trim()) {
      const id = topics.length + 1;
      setTopics([...topics, { id, title: newTopic, author: "You", posts: [] }]);
      setNewTopic("");
    }
  }

  function addPost() {
    if (newPost.trim() && selectedTopic) {
      const updatedTopics = topics.map(topic => {
        if (topic.id === selectedTopic.id) {
          const newPostObj = { id: topic.posts.length + 1, author: "You", text: newPost };
          return { ...topic, posts: [...topic.posts, newPostObj] };
        }
        return topic;
      });
      setTopics(updatedTopics);
      setNewPost("");
    }
  }

  return (
    <div className="forum-container">
      <h1 className="forum-title">Discussion Forum</h1>

      {!selectedTopic && (
        <>
          <div className="new-topic-row">
            <input
              type="text"
              placeholder="Start a new topic..."
              value={newTopic}
              onChange={e => setNewTopic(e.target.value)}
              className="new-topic-input"
            />
            <button onClick={addTopic} className="new-topic-btn">
              Add Topic
            </button>
          </div>

          <ul className="forum-topic-list">
            {topics.map(topic => (
              <li
                key={topic.id}
                className="forum-topic-item"
                onClick={() => setSelectedTopic(topic)}
              >
                <h3>{topic.title}</h3>
                <small>Started by {topic.author}</small>
              </li>
            ))}
          </ul>
        </>
      )}

      {selectedTopic && (
        <div>
          <button
            onClick={() => setSelectedTopic(null)}
            className="forum-back-btn"
          >
            ← Back to Topics
          </button>
          <h2 className="forum-thread-title">{selectedTopic.title}</h2>
          <hr />
          <div className="forum-posts" style={{ marginTop: 16 }}>
            {selectedTopic.posts.length === 0 && <p>No posts yet. Be the first to reply!</p>}
            {selectedTopic.posts.map(post => (
              <div key={post.id} className="forum-post-bubble">
                <div className="forum-post-author">
                  <span className="animated-emoji">👩‍🦰</span> {post.author}
                </div>
                <div className="forum-post-text">{post.text}</div>
              </div>
            ))}
          </div>

          <div className="forum-reply-area">
            <textarea
              rows={3}
              placeholder="Write your reply..."
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              className="forum-reply-box"
            />
            <button onClick={addPost} className="forum-reply-btn">
              Add Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
