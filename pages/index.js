
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [trialEnded, setTrialEnded] = useState(false);

  const handleLogin = (provider) => {
    console.log("Logado com:", provider);
    setLoggedIn(true);
    setTimeout(() => setTrialEnded(true), 5000);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-4">
          Pare de pagar por serviços que você nem lembra que assinou!
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
          O Assistente Inteligente que encontra e ajuda você a cancelar assinaturas fantasmas.
          <br />
          <strong>100% grátis por 7 dias</strong> — sem cartão de crédito.
        </p>
        <Button className="mb-4 text-lg px-6 py-4" onClick={() => handleLogin("gmail")}>Entrar com Gmail</Button>
        <Button className="mb-4 text-lg px-6 py-4" onClick={() => handleLogin("google")}> <FcGoogle className="mr-2" /> Entrar com Google</Button>
        <Button className="mb-10 text-lg px-6 py-4" onClick={() => handleLogin("facebook")}> <FaFacebook className="mr-2" /> Entrar com Facebook</Button>
      </div>
    );
  }

  if (loggedIn && trialEnded) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Seu teste gratuito terminou</h2>
        <p className="text-center mb-6 text-gray-700">Escolha um plano para continuar economizando com a nossa IA:</p>
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Plano Mensal</h2>
              <p className="text-gray-600 mb-4">IA completa, cancelamento facilitado, relatórios detalhados</p>
              <Button className="w-full">Assinar Mensal</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Plano Anual</h2>
              <p className="text-gray-600 mb-4">Tudo do mensal + suporte premium e economia de 30%</p>
              <Button className="w-full">Assinar Anual</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Bem-vindo ao seu Dashboard de Teste Grátis (7 Dias)
      </motion.h2>
      <p className="text-gray-700 text-center mb-6">A IA encontrou 3 assinaturas suspeitas:</p>
      <ul className="list-disc text-left text-gray-600 mb-10">
        <li>Spotify Premium - R$19,90</li>
        <li>Disney+ - R$33,90</li>
        <li>Revista X - R$9,99</li>
      </ul>
      <p className="text-center text-sm text-gray-500">Faltam 7 dias para o fim do teste gratuito.</p>
    </div>
  );
}
