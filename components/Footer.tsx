import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

        {/* Texto Principal */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            <strong>AVISO IMPORTANTE:</strong> Somos uma assessoria privada especializada em suporte aos Empreendedores MEI de todo o Brasil.
            Não temos vínculo com os canais governamentais.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex space-x-6">
          <a href="/termos" className="text-sm hover:text-gray-400 transition">Termos de Uso</a>
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="w-full h-[1px] bg-gray-700 my-6"></div>

      {/* Direitos Autorais + Ícones Sociais */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* Direitos Autorais */}
        <p className="text-sm text-center md:text-left">
          © 2025 – <span className="text-white">MEI NA HORA</span> | Todos os direitos reservados.
        </p>

        {/* Ícones Sociais */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="https://www.instagram.com/meinahoraoficial/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://wa.me/5585991463668?text=Olá,%20quero%20saber%20mais%20sobre%20a%20MEI%20na%20Hora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
