import React from 'react';

const BlogSection = () => {
  // Exemple de données pour les articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Titre de l'article 1",
      content: "Contenu de l'article 1...",
    },
    {
      id: 2,
      title: "Titre de l'article 2",
      content: "Contenu de l'article 2...",
    },
    // Ajoutez d'autres articles de blog ici
  ];

  return (
    <section id="blog-section">
      <h2>Blog</h2>
      <div>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
