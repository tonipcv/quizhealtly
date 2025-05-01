import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VUOM™. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/politicas" className="text-gray-500 hover:text-gray-900 text-sm">
              Política de Privacidade
            </Link>
            <Link href="/politicas-us" className="text-gray-500 hover:text-gray-900 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-400 text-center">
          <p>
            Nossos questionários e avaliações não são patrocinados, endossados ou administrados pelo Facebook/Meta.
          </p>
        </div>
      </div>
    </footer>
  );
} 