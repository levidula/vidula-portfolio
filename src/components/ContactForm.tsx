import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Tell me about your project"
          value={formData.project}
          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          rows={4}
          className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
          required
        />
      </div>
      <Button type="submit" variant="hero" className="w-full sm:w-auto">
        Send Message
        <Send className="w-4 h-4 ml-1" />
      </Button>
    </form>
  );
};
