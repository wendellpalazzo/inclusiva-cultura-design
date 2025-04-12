export const VideoInstitucional = () => {
  return (
    <div className="bg-dark/90 text-white p-5 lg:p-20 flex lg:flex-row justify-evenly items-center flex-col space-y-10 lg:space-y-0">
      <div className="space-y-3 lg:w-1/4">
        <h2 className="text-white text-3xl font-opensans">
          Veja esse vídeo e conheça um pouco mais sobre o Instituto Mãos de
          Ouro.
        </h2>
        <p className="text-white/80">
          Que enche de Orgulho o Marajó e faz um Marajó diferente do que você
          conhece.
        </p>
      </div>

      <div className="mt-8 lg:w-1/2">
        <iframe
          src="https://www.youtube-nocookie.com/embed/qQSKEr3oCzU?si=zwVG-5Au9InN0Crs"
          title="Instituto Mãos de Ouro - Vídeo Institucional"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-[300px] md:h-[400px] rounded-lg shadow-xl shadow-zinc-900 border-none"
        ></iframe>
      </div>
    </div>
  );
};
