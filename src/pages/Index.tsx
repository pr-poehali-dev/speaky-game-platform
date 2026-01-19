import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeView, setActiveView] = useState<'store' | 'library' | 'profile'>('store');
  const [searchQuery, setSearchQuery] = useState('');
  const [libraryGames, setLibraryGames] = useState<number[]>([1, 3, 5]);

  const games = [
    { id: 1, title: 'Cyber Legends VR', platform: 'VR', price: 1999, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400', players: '2.5M', rating: 4.8 },
    { id: 2, title: 'Galaxy Warriors Mobile', platform: 'Mobile', price: 0, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400', players: '15M', rating: 4.6 },
    { id: 3, title: 'Shadow Quest PC', platform: 'PC', price: 2499, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', players: '8M', rating: 4.9 },
    { id: 4, title: 'Racing Extreme VR', platform: 'VR', price: 1499, image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=400', players: '1.2M', rating: 4.5 },
    { id: 5, title: 'Strategy Empire Mobile', platform: 'Mobile', price: 0, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400', players: '20M', rating: 4.7 },
    { id: 6, title: 'Dark Souls Legacy PC', platform: 'PC', price: 2999, image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400', players: '5M', rating: 4.9 },
    { id: 7, title: 'Space Explorer VR', platform: 'VR', price: 1799, image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400', players: '900K', rating: 4.4 },
    { id: 8, title: 'Puzzle Master Mobile', platform: 'Mobile', price: 0, image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400', players: '30M', rating: 4.3 },
  ];

  const achievements = [
    { id: 1, title: 'Первая игра', desc: 'Добавьте игру в библиотеку', progress: 100, icon: 'Star' },
    { id: 2, title: 'Коллекционер', desc: 'Соберите 10 игр', progress: 30, icon: 'Trophy' },
    { id: 3, title: 'Гуру VR', desc: 'Играйте в VR 50 часов', progress: 64, icon: 'Glasses' },
    { id: 4, title: 'Социальный игрок', desc: 'Добавьте 5 друзей', progress: 80, icon: 'Users' },
  ];

  const friends = [
    { id: 1, name: 'Alex_Pro', status: 'online', game: 'Cyber Legends VR', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { id: 2, name: 'GameMaster', status: 'offline', game: null, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Master' },
    { id: 3, name: 'VR_Queen', status: 'online', game: 'Racing Extreme VR', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Queen' },
  ];

  const toggleLibrary = (gameId: number) => {
    setLibraryGames(prev => 
      prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
    );
  };

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderGameCard = (game: typeof games[0]) => (
    <Card key={game.id} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur">
          {game.platform}
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg">{game.title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icon name="Users" size={14} />
            {game.players}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
            {game.rating}
          </span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold">
            {game.price === 0 ? 'Бесплатно' : `${game.price} ₽`}
          </span>
          <Button 
            size="sm" 
            variant={libraryGames.includes(game.id) ? "secondary" : "default"}
            onClick={() => toggleLibrary(game.id)}
            className="gap-2"
          >
            <Icon name={libraryGames.includes(game.id) ? "Check" : "Plus"} size={16} />
            {libraryGames.includes(game.id) ? 'В библиотеке' : 'Добавить'}
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Speaky
            </h1>
            <nav className="hidden md:flex gap-6">
              <button 
                onClick={() => setActiveView('store')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeView === 'store' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Магазин
              </button>
              <button 
                onClick={() => setActiveView('library')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeView === 'library' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Библиотека
              </button>
              <button 
                onClick={() => setActiveView('profile')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeView === 'profile' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Профиль
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Поиск игр..." 
                className="pl-10 w-64 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer hover-scale">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container px-6 py-8">
        {activeView === 'store' && (
          <div className="animate-fade-in space-y-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 p-8 md:p-12">
              <div className="relative z-10 max-w-2xl">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Новинка недели</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Cyber Legends VR</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Погрузитесь в киберпанк-вселенную с невероятной графикой и захватывающим геймплеем
                </p>
                <div className="flex gap-3">
                  <Button size="lg" className="gap-2">
                    <Icon name="Download" size={20} />
                    Скачать сейчас
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Icon name="Play" size={20} />
                    Трейлер
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="all">Все игры</TabsTrigger>
                <TabsTrigger value="pc">ПК игры</TabsTrigger>
                <TabsTrigger value="mobile">Мобильные</TabsTrigger>
                <TabsTrigger value="vr">VR игры</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.map(renderGameCard)}
                </div>
              </TabsContent>

              <TabsContent value="pc">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.filter(g => g.platform === 'PC').map(renderGameCard)}
                </div>
              </TabsContent>

              <TabsContent value="mobile">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.filter(g => g.platform === 'Mobile').map(renderGameCard)}
                </div>
              </TabsContent>

              <TabsContent value="vr">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.filter(g => g.platform === 'VR').map(renderGameCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeView === 'library' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Моя библиотека</h2>
                <p className="text-muted-foreground mt-1">У вас {libraryGames.length} игр</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Icon name="Filter" size={18} />
                Фильтры
              </Button>
            </div>

            {libraryGames.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="Library" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Ваша библиотека пуста</h3>
                <p className="text-muted-foreground mb-6">Добавьте игры из магазина</p>
                <Button onClick={() => setActiveView('store')} className="gap-2">
                  <Icon name="ShoppingBag" size={18} />
                  Перейти в магазин
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.filter(g => libraryGames.includes(g.id)).map((game) => (
                  <Card key={game.id} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button className="w-full gap-2">
                          <Icon name="Play" size={18} />
                          Играть
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{game.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {game.platform}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Последняя игра: 2 дня назад</span>
                          <span>12ч</span>
                        </div>
                        <Progress value={65} className="h-1" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeView === 'profile' && (
          <div className="animate-fade-in space-y-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 p-8">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-1">ProGamer2024</h2>
                      <p className="text-muted-foreground">Игрок с марта 2024</p>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Settings" size={18} />
                      Редактировать профиль
                    </Button>
                  </div>
                  <div className="flex gap-8 mt-6">
                    <div>
                      <div className="text-2xl font-bold">{libraryGames.length}</div>
                      <div className="text-sm text-muted-foreground">Игр</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">127</div>
                      <div className="text-sm text-muted-foreground">Часов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">42</div>
                      <div className="text-sm text-muted-foreground">Достижений</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{friends.length}</div>
                      <div className="text-sm text-muted-foreground">Друзей</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Достижения</h3>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Все достижения
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
                <div className="grid gap-4">
                  {achievements.map((ach) => (
                    <Card key={ach.id} className="p-4 bg-card/50 backdrop-blur border-border/50">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name={ach.icon as any} className="text-primary" size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{ach.title}</h4>
                              <p className="text-sm text-muted-foreground">{ach.desc}</p>
                            </div>
                            <Badge variant={ach.progress === 100 ? "default" : "secondary"}>
                              {ach.progress}%
                            </Badge>
                          </div>
                          <Progress value={ach.progress} className="h-2" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Друзья</h3>
                  <Button variant="ghost" size="sm">
                    <Icon name="UserPlus" size={16} />
                  </Button>
                </div>
                <div className="space-y-3">
                  {friends.map((friend) => (
                    <Card key={friend.id} className="p-4 bg-card/50 backdrop-blur border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={friend.avatar} />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{friend.name}</div>
                          <div className="text-xs text-muted-foreground truncate">
                            {friend.game || 'Не в сети'}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <Icon name="MessageCircle" size={18} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;