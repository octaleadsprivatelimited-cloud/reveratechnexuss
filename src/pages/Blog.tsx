import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 In-Demand Tech Skills for 2026",
    excerpt: "Discover the most sought-after technical skills that employers are looking for in the current job market.",
    author: "Priya Sharma",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Career Tips",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
  },
  {
    id: 2,
    title: "How to Ace Your Next Virtual Interview",
    excerpt: "Expert tips and strategies for making a great impression in online job interviews.",
    author: "Rahul Verma",
    date: "January 3, 2026",
    readTime: "4 min read",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
  },
  {
    id: 3,
    title: "The Future of Healthcare Recruitment in India",
    excerpt: "Exploring trends and challenges in hiring healthcare professionals post-pandemic.",
    author: "Dr. Meera Nair",
    date: "December 28, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
  },
  {
    id: 4,
    title: "Building a Winning Resume: A Complete Guide",
    excerpt: "Step-by-step guide to creating a resume that stands out to recruiters and hiring managers.",
    author: "Priya Sharma",
    date: "December 22, 2025",
    readTime: "7 min read",
    category: "Career Tips",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
  },
  {
    id: 5,
    title: "Hospitality Industry: Recovery and Growth Trends",
    excerpt: "Analyzing the job market recovery in hotels, restaurants, and tourism sectors.",
    author: "Arjun Reddy",
    date: "December 18, 2025",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: 6,
    title: "Negotiating Your Salary: Do's and Don'ts",
    excerpt: "Learn effective strategies for salary negotiation that can boost your earning potential.",
    author: "Rahul Verma",
    date: "December 15, 2025",
    readTime: "4 min read",
    category: "Career Tips",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
  },
];

const categories = ["All", "Career Tips", "Interview Tips", "Industry Insights", "HR Trends"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-primary py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Blog & Insights
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Career Insights &{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Industry Trends
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Stay updated with the latest hiring trends, career advice, and industry insights 
              from our recruitment experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full px-4 py-2 text-sm font-medium bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl bg-card shadow-soft overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center text-sm font-medium text-secondary">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Subscribe to our newsletter for the latest career tips and job opportunities.
          </p>
          <div className="mt-8 mx-auto max-w-md flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg px-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
