import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="testimonial-card">
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <footer className="testimonial-footer">
        <div className="testimonial-avatar">
          {testimonial.author[0]}
        </div>
        <div>
          <div className="testimonial-author">{testimonial.author}</div>
          <div className="testimonial-role">{testimonial.role} · {testimonial.company}</div>
        </div>
      </footer>
    </blockquote>
  );
}
