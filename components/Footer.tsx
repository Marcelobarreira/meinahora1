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
          <p className="mt-2 text-sm font-semibold">
            Razão Social: <span className="text-white">MEI NA HORA</span> | CNPJ: 00.00.000/0000-00
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex space-x-6">
          <a href="/termos" className="text-sm hover:text-gray-400 transition">Termos de Uso</a>
          <a href="#" className="text-sm hover:text-gray-400 transition">Política de Privacidade</a>
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

        {/* Ícones Sociais (Opcional) */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition">
            <i className="fab fa-facebook text-lg"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
