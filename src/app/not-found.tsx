// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-grad-green-end-1 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-text-black-dark mb-4 font-josefin-sans">
          Page Not Found
        </h2>
        <p className="text-text-gray text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="fill" size="lg">
              Go Back Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
