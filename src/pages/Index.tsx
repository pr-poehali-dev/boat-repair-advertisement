import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Anchor',
      title: 'Ремонт моторных лодок',
      description: 'Полный цикл ремонта корпусов, систем управления и электрооборудования',
      features: ['Корпусные работы', 'Замена транца', 'Ремонт киля']
    },
    {
      icon: 'Wrench',
      title: 'Ремонт квадроциклов',
      description: 'Диагностика и ремонт всех узлов квадроциклов любой сложности',
      features: ['Подвеска', 'Трансмиссия', 'Электрика']
    },
    {
      icon: 'Cog',
      title: 'Ремонт двигателей',
      description: 'Капитальный ремонт, настройка и модернизация двигателей',
      features: ['Двухтактные', 'Четырехтактные', 'Настройка карбюраторов']
    }
  ];

  const priceList = [
    { service: 'Диагностика двигателя', price: 'от 2 000 ₽' },
    { service: 'Замена масла и фильтров', price: 'от 1 500 ₽' },
    { service: 'Ремонт топливной системы', price: 'от 3 500 ₽' },
    { service: 'Капитальный ремонт двигателя', price: 'от 25 000 ₽' },
    { service: 'Ремонт подвески квадроцикла', price: 'от 8 000 ₽' },
    { service: 'Восстановление корпуса лодки', price: 'от 15 000 ₽' }
  ];

  const portfolio = [
    { title: 'Yamaha 40HP', description: 'Капитальный ремонт двигателя', year: '2024', image: 'https://cdn.poehali.dev/projects/5ea2be34-4126-4236-adfa-a00b6e23baf5/files/0f69a479-6457-47cd-86c0-89bb774135f4.jpg' },
    { title: 'Suzuki DF50', description: 'Замена поршневой группы', year: '2024', image: 'https://cdn.poehali.dev/projects/5ea2be34-4126-4236-adfa-a00b6e23baf5/files/500d3666-7c7f-4b52-82c4-89c88b03ab03.jpg' },
    { title: 'BRP Outlander', description: 'Ремонт трансмиссии', year: '2023', image: 'https://cdn.poehali.dev/projects/5ea2be34-4126-4236-adfa-a00b6e23baf5/files/5077f94e-7f8d-4bb1-9947-02cc78af5557.jpg' },
    { title: 'Mercury 75HP', description: 'Настройка карбюратора', year: '2023', image: 'https://cdn.poehali.dev/projects/5ea2be34-4126-4236-adfa-a00b6e23baf5/files/0f69a479-6457-47cd-86c0-89bb774135f4.jpg' }
  ];

  const reviews = [
    { name: 'Дмитрий К.', text: 'Отличный сервис! Отремонтировали мотор за 3 дня, работает как новый.', rating: 5 },
    { name: 'Александр П.', text: 'Профессионалы своего дела. Квадроцикл после ремонта стал работать лучше, чем был новым!', rating: 5 },
    { name: 'Игорь М.', text: 'Быстро продиагностировали проблему и устранили. Цены адекватные.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Ship" className="text-primary" size={32} />
              <span className="text-xl font-bold text-primary-foreground">МоторСервис</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'services', 'price', 'portfolio', 'about', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-primary-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'price' && 'Прайс'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О нас'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-sm">
            Работаем с 2015 года
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Профессиональный ремонт
            <span className="block text-primary">водной и мототехники</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ремонт моторных лодок, квадроциклов и двигателей любой сложности. 
            Гарантия качества и честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию водной и мототехники
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="CheckCircle2" className="text-accent mr-2" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ориентировочная стоимость работ. Точная цена определяется после диагностики
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {priceList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <Icon name="Tool" className="text-primary mr-3" size={20} />
                        <span className="font-medium">{item.service}</span>
                      </div>
                      <Badge variant="outline" className="text-lg font-semibold">{item.price}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать полный прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры выполненных ремонтов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge>{item.year}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашем сервисе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на ремонте моторных лодок, квадроциклов и двигателей с 2015 года. 
                Наша команда — это опытные мастера, которые постоянно повышают квалификацию.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Award" className="text-accent mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Гарантия качества</h3>
                    <p className="text-muted-foreground">На все работы предоставляем гарантию до 12 месяцев</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="text-accent mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Быстрые сроки</h3>
                    <p className="text-muted-foreground">Большинство ремонтов выполняем за 3-5 дней</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Wrench" className="text-accent mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Оригинальные запчасти</h3>
                    <p className="text-muted-foreground">Используем только качественные комплектующие</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
              <Icon name="Users" size={120} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPin" className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-primary-foreground/80">г. Москва, ул. Речная, д. 25, стр. 1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-primary-foreground/80">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-primary-foreground/80">info@motorservice.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-primary-foreground/80">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-primary-foreground/80">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card/95">
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на ремонт</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Опишите проблему"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 МоторСервис. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;