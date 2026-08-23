import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 bg-neutral-50/50">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold text-[#127749] mb-4 font-primary">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4 font-primary">
          Page Not Found
        </h2>
        <p className="text-neutral-600 text-base md:text-lg mb-8 font-secondary leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="default" size="lg" className="bg-[#127749] hover:bg-[#0e512e] text-white">
              Go Back Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-[#127749] text-[#127749] hover:bg-[#127749] hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

