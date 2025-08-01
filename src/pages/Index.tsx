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
    <div className="min-h-screen bg-cyber-black text-cyber-cyan font-cyber overflow-x-hidden">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black"></div>
        
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(/img/5d7f49d1-66ca-4a01-babe-281bd0838d0c.jpg)' }}
        ></div>
        
        <div className="relative z-10 text-center max-w-md mx-auto">
          {/* System Status */}
          <div className="mb-6 text-xs text-cyber-green">
            СИСТЕМА АКТИВИРОВАНА В {formatTime(currentTime)}
          </div>
          
          {/* Main Logo */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-2 glitch neon-text text-cyber-cyan">
              CYBER
            </h1>
            <h1 className="text-6xl font-bold mb-4 glitch neon-text text-cyber-purple">
              DASH
            </h1>
            <p className="text-sm text-cyber-green">QUANTUM DELIVERY PROTOCOL</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-xs">
            <div className="border border-cyber-cyan/30 rounded-lg p-3 bg-cyber-dark/50">
              <div className="text-cyber-green font-bold">99.9%</div>
              <div className="text-cyber-cyan/70">СИСТЕМА</div>
            </div>
            <div className="border border-cyber-purple/30 rounded-lg p-3 bg-cyber-dark/50">
              <div className="text-cyber-purple font-bold">2.3с</div>
              <div className="text-cyber-cyan/70">СКОРОСТЬ</div>
            </div>
            <div className="border border-cyber-red/30 rounded-lg p-3 bg-cyber-dark/50">
              <div className="text-cyber-red font-bold">24/7</div>
              <div className="text-cyber-cyan/70">АКТИВНО</div>
            </div>
          </div>

          {/* Main CTA */}
          <Button 
            className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-black font-bold text-lg py-6 rounded-lg shadow-neon hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105"
          >
            ИНИЦИИРОВАТЬ ДОСТАВКУ
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-cyber-purple">
            CYBER УСЛУГИ
          </h2>
          
          <div className="space-y-6">
            {/* Express Delivery */}
            <Card className="border-cyber-cyan/30 bg-cyber-dark/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" className="text-cyber-cyan" size={24} />
                    <div>
                      <h3 className="font-bold text-cyber-cyan">ЭКСПРЕСС</h3>
                      <p className="text-xs text-cyber-green">30 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-purple font-bold">299₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                >
                  АКТИВИРОВАТЬ
                </Button>
              </CardContent>
            </Card>

            {/* Drone Delivery */}
            <Card className="border-cyber-purple/30 bg-cyber-dark/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Drone" fallback="Plane" className="text-cyber-purple" size={24} />
                    <div>
                      <h3 className="font-bold text-cyber-purple">ДРОН AI</h3>
                      <p className="text-xs text-cyber-green">15 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-red font-bold">599₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-cyber-purple text-cyber-black hover:bg-cyber-purple/80"
                >
                  ЗАПУСТИТЬ
                </Button>
              </CardContent>
            </Card>

            {/* Quantum Delivery */}
            <Card className="border-cyber-red/30 bg-cyber-dark/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Atom" fallback="Zap" className="text-cyber-red" size={24} />
                    <div>
                      <h3 className="font-bold text-cyber-red">QUANTUM</h3>
                      <p className="text-xs text-cyber-green">5 мин</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-cyan font-bold">999₽</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-cyber-red text-cyber-black hover:bg-cyber-red/80"
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
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-cyber-green">
            LIVE ТРЕКИНГ
          </h2>
          
          {/* Map Container */}
          <div className="border-2 border-cyber-green/50 rounded-lg p-6 bg-cyber-dark/70 backdrop-blur-sm mb-6">
            <div className="aspect-square bg-gradient-to-br from-cyber-black to-cyber-dark rounded-lg relative overflow-hidden">
              {/* Simulated Map Grid */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px'
              }}></div>
              
              {/* Moving Courier Dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyber-cyan rounded-full shadow-neon animate-pulse">
                <div className="absolute inset-0 rounded-full bg-cyber-cyan animate-ping"></div>
              </div>
              
              {/* Route Line */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-70"></div>
              
              {/* Status Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-cyber-green mb-1">КУРЬЕР #CY-2077</div>
                <div className="text-xs text-cyber-cyan">МАРШРУТ: ОПТИМИЗИРОВАН AI</div>
              </div>
            </div>
          </div>
          
          {/* Live Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-cyber-green/30 rounded-lg p-4 bg-cyber-dark/50">
              <div className="text-cyber-green font-bold text-lg">3 мин</div>
              <div className="text-xs text-cyber-cyan/70">ДО ПРИБЫТИЯ</div>
            </div>
            <div className="border border-cyber-purple/30 rounded-lg p-4 bg-cyber-dark/50">
              <div className="text-cyber-purple font-bold text-lg">2.1 км</div>
              <div className="text-xs text-cyber-cyan/70">ОСТАЛОСЬ</div>
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
          <h2 className="text-3xl font-bold text-center mb-8 neon-text text-cyber-red">
            AI ЗАКАЗ
          </h2>
          
          <Card className="border-cyber-red/30 bg-cyber-dark/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Voice Command */}
                <div className="flex items-center space-x-3 p-3 border border-cyber-cyan/30 rounded-lg bg-cyber-black/50">
                  <Icon name="Mic" className="text-cyber-cyan" size={20} />
                  <span className="text-sm text-cyber-cyan">Голосовая команда активна</span>
                </div>
                
                {/* From */}
                <div>
                  <label className="text-xs text-cyber-green block mb-2">ОТКУДА</label>
                  <Input 
                    placeholder="Координаты отправления"
                    className="bg-cyber-black/50 border-cyber-cyan/30 text-cyber-cyan placeholder:text-cyber-cyan/50"
                  />
                </div>
                
                {/* To */}
                <div>
                  <label className="text-xs text-cyber-green block mb-2">КУДА</label>
                  <Input 
                    placeholder="Координаты назначения"
                    className="bg-cyber-black/50 border-cyber-purple/30 text-cyber-cyan placeholder:text-cyber-cyan/50"
                  />
                </div>
                
                {/* AI Calculation */}
                <div className="border border-cyber-purple/30 rounded-lg p-4 bg-cyber-black/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-cyber-purple">AI РАСЧЁТ:</span>
                    <Icon name="Brain" fallback="Cpu" className="text-cyber-purple animate-pulse" size={16} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-cyber-green font-bold">12 мин</div>
                      <div className="text-cyber-cyan/70">ВРЕМЯ</div>
                    </div>
                    <div>
                      <div className="text-cyber-purple font-bold">399₽</div>
                      <div className="text-cyber-cyan/70">ЦЕНА</div>
                    </div>
                    <div>
                      <div className="text-cyber-red font-bold">5.2км</div>
                      <div className="text-cyber-cyan/70">ПУТЬ</div>
                    </div>
                  </div>
                </div>
                
                {/* Submit */}
                <Button 
                  className="w-full bg-gradient-to-r from-cyber-red to-cyber-purple text-cyber-black font-bold text-lg py-6 rounded-lg shadow-neon-red hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105"
                >
                  ОБРАБОТАТЬ ЗАПРОС
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyber-cyan/20">
        <div className="max-w-md mx-auto text-center">
          <div className="text-xs text-cyber-green mb-2">
            CYBER DASH © 2077 | QUANTUM LOGISTICS PROTOCOL
          </div>
          <div className="text-xs text-cyber-cyan/50">
            СИСТЕМА РАБОТАЕТ НА БАЗЕ AI NEURAL NETWORK v3.14.159
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;