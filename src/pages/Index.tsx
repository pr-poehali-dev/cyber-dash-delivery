import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#00FFFF] overflow-x-hidden" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]"></div>
        
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(/img/5d7f49d1-66ca-4a01-babe-281bd0838d0c.jpg)' }}
        ></div>
        
        <div className="relative z-10 text-center max-w-md mx-auto">
          {/* System Status */}
          <div className="mb-6 text-xs text-[#39FF14]">
            СИСТЕМА АКТИВИРОВАНА В {formatTime(currentTime)}
          </div>
          
          {/* Main Logo */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-2 glitch neon-text text-[#00FFFF]">
              CYBER
            </h1>
            <h1 className="text-6xl font-bold mb-4 glitch neon-text text-[#8A2BE2]">
              DASH
            </h1>
            <p className="text-sm text-[#39FF14]">QUANTUM DELIVERY PROTOCOL</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-xs">
            <div className="border border-[#00FFFF]/30 rounded-lg p-3 bg-[#1A1A1A]/50">
              <div className="text-[#39FF14] font-bold">99.9%</div>
              <div className="text-[#00FFFF]/70">СИСТЕМА</div>
            </div>
            <div className="border border-[#8A2BE2]/30 rounded-lg p-3 bg-[#1A1A1A]/50">
              <div className="text-[#8A2BE2] font-bold">2.3с</div>
              <div className="text-[#00FFFF]/70">СКОРОСТЬ</div>
            </div>
            <div className="border border-[#FF073A]/30 rounded-lg p-3 bg-[#1A1A1A]/50">
              <div className="text-[#FF073A] font-bold">24/7</div>
              <div className="text-[#00FFFF]/70">АКТИВНО</div>
            </div>
          </div>

          {/* Main CTA */}
          <Button 
            className="w-full bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] text-[#0A0A0A] font-bold text-lg py-6 rounded-lg hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF' }}
          >
            ИНИЦИИРОВАТЬ ДОСТАВКУ
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-[#8A2BE2]">
            CYBER УСЛУГИ
          </h2>
          
          <div className="space-y-6">
            {/* Express Delivery */}
            <Card className="border-[#00FFFF]/30 bg-[#1A1A1A]/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" className="text-[#00FFFF]" size={24} />
                    <div>
                      <h3 className="font-bold text-[#00FFFF]">ЭКСПРЕСС</h3>
                      <p className="text-xs text-[#39FF14]">30 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#8A2BE2] font-bold">299₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-[#00FFFF] text-[#0A0A0A] hover:bg-[#00FFFF]/80"
                >
                  АКТИВИРОВАТЬ
                </Button>
              </CardContent>
            </Card>

            {/* Drone Delivery */}
            <Card className="border-[#8A2BE2]/30 bg-[#1A1A1A]/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Drone" fallback="Plane" className="text-[#8A2BE2]" size={24} />
                    <div>
                      <h3 className="font-bold text-[#8A2BE2]">ДРОН AI</h3>
                      <p className="text-xs text-[#39FF14]">15 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FF073A] font-bold">599₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-[#8A2BE2] text-[#0A0A0A] hover:bg-[#8A2BE2]/80"
                >
                  ЗАПУСТИТЬ
                </Button>
              </CardContent>
            </Card>

            {/* Quantum Delivery */}
            <Card className="border-[#FF073A]/30 bg-[#1A1A1A]/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Atom" fallback="Zap" className="text-[#FF073A]" size={24} />
                    <div>
                      <h3 className="font-bold text-[#FF073A]">QUANTUM</h3>
                      <p className="text-xs text-[#39FF14]">5 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00FFFF] font-bold">999₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-[#FF073A] text-[#0A0A0A] hover:bg-[#FF073A]/80"
                >
                  ТЕЛЕПОРТ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="relative py-16 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/73e2abdb-9669-4128-8fdb-3ee04290fe95.jpg)' }}
        ></div>
        
        <div className="relative z-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-[#39FF14]">
            LIVE ТРЕКИНГ
          </h2>
          
          {/* Map Container */}
          <div className="border-2 border-[#39FF14]/50 rounded-lg p-6 bg-[#1A1A1A]/70 backdrop-blur-sm mb-6">
            <div className="aspect-square bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-lg relative overflow-hidden">
              {/* Simulated Map Grid */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px'
              }}></div>
              
              {/* Moving Courier Dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse" style={{ boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF' }}>
                <div className="absolute inset-0 rounded-full bg-[#00FFFF] animate-ping"></div>
              </div>
              
              {/* Route Line */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] opacity-70"></div>
              
              {/* Status Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-[#39FF14] mb-1">КУРЬЕР #CY-2077</div>
                <div className="text-xs text-[#00FFFF]">МАРШРУТ: ОПТИМИЗИРОВАН AI</div>
              </div>
            </div>
          </div>
          
          {/* Live Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-[#39FF14]/30 rounded-lg p-4 bg-[#1A1A1A]/50">
              <div className="text-[#39FF14] font-bold text-lg">3 мин</div>
              <div className="text-xs text-[#00FFFF]/70">ДО ПРИБЫТИЯ</div>
            </div>
            <div className="border border-[#8A2BE2]/30 rounded-lg p-4 bg-[#1A1A1A]/50">
              <div className="text-[#8A2BE2] font-bold text-lg">2.1 км</div>
              <div className="text-xs text-[#00FFFF]/70">ОСТАЛОСЬ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="relative py-16 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/cc8d12ac-d25e-4339-8576-3fc531f0c4e6.jpg)' }}
        ></div>
        
        <div className="relative z-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-[#FF073A]">
            AI ЗАКАЗ
          </h2>
          
          <Card className="border-[#FF073A]/30 bg-[#1A1A1A]/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Voice Command */}
                <div className="flex items-center space-x-3 p-3 border border-[#00FFFF]/30 rounded-lg bg-[#0A0A0A]/50">
                  <Icon name="Mic" className="text-[#00FFFF]" size={20} />
                  <span className="text-sm text-[#00FFFF]">Голосовая команда активна</span>
                </div>
                
                {/* From */}
                <div>
                  <label className="text-xs text-[#39FF14] block mb-2">ОТКУДА</label>
                  <Input 
                    placeholder="Координаты отправления"
                    className="bg-[#0A0A0A]/50 border-[#00FFFF]/30 text-[#00FFFF] placeholder:text-[#00FFFF]/50"
                  />
                </div>
                
                {/* To */}
                <div>
                  <label className="text-xs text-[#39FF14] block mb-2">КУДА</label>
                  <Input 
                    placeholder="Координаты назначения"
                    className="bg-[#0A0A0A]/50 border-[#8A2BE2]/30 text-[#00FFFF] placeholder:text-[#00FFFF]/50"
                  />
                </div>
                
                {/* AI Calculation */}
                <div className="border border-[#8A2BE2]/30 rounded-lg p-4 bg-[#0A0A0A]/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-[#8A2BE2]">AI РАСЧЁТ:</span>
                    <Icon name="Brain" fallback="Cpu" className="text-[#8A2BE2] animate-pulse" size={16} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-[#39FF14] font-bold">12 мин</div>
                      <div className="text-[#00FFFF]/70">ВРЕМЯ</div>
                    </div>
                    <div>
                      <div className="text-[#8A2BE2] font-bold">399₽</div>
                      <div className="text-[#00FFFF]/70">ЦЕНА</div>
                    </div>
                    <div>
                      <div className="text-[#FF073A] font-bold">5.2км</div>
                      <div className="text-[#00FFFF]/70">ПУТЬ</div>
                    </div>
                  </div>
                </div>
                
                {/* Submit */}
                <Button 
                  className="w-full bg-gradient-to-r from-[#FF073A] to-[#8A2BE2] text-[#0A0A0A] font-bold text-lg py-6 rounded-lg hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 0 20px #FF073A, 0 0 40px #FF073A' }}
                >
                  ОБРАБОТАТЬ ЗАПРОС
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-[#00FFFF]/20">
        <div className="max-w-md mx-auto text-center">
          <div className="text-xs text-[#39FF14] mb-2">
            CYBER DASH © 2077 | QUANTUM LOGISTICS PROTOCOL
          </div>
          <div className="text-xs text-[#00FFFF]/50">
            СИСТЕМА РАБОТАЕТ НА БАЗЕ AI NEURAL NETWORK v3.14.159
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;