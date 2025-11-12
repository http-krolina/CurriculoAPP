import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';


const Sobre = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.h2}>Sobre mim</Text>
    <Text style={styles.paragraph}>
      Em transição de carreira para a área de tecnologia, uma paixão que me acompanha desde a adolescência e que hoje busco transformar em profissão. Minha formação em Análise e Desenvolvimento de Sistemas  me proporcionou uma base sólida em desenvolvimento Front-end (HTML, CSS, React) e Design UI/UX, com experiência na criação de protótipos no Figma.

      Acreditando que as melhores soluções são guiadas por dados, estou expandindo minhas competências em Análise de Dados através da formação na ADA Tech, com foco em Python. Meu objetivo é unir a habilidade de comunicação da minha experiência anterior em atendimento com estas novas competências técnicas para criar soluções digitais completas e estratégicas.
    </Text>
    <View style={styles.contatoContainer}>
      <Text style={styles.contatoTitle}>Contato:</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('tel:+5581992979914')}>
        Telefone: (81) 99297-9914
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('mailto:Carola061200@gmail.com')}>
        Email: Carola061200@gmail.com
      </Text>
    </View>
    <View style={styles.socialIcons}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/ana-carolina-sant0s/')
        }>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/256/174/174857.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/http-krolina')}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);


const Formacao = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.h2}>Formação Acadêmica</Text>
    <Text style={styles.listItem}>
      <Text style={styles.bold}>
        Graduação em Análise e Desenvolvimento de Sistemas
      </Text>
      {'\n'}
      Faculdade SENAC
      {'\n'}
      2024 - em andamento
    </Text>
  </View>
);

// --- Componente: Experiência ---
const Experiencia = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.h2}>Experiência Profissional</Text>
    <View style={styles.table}>
      {/* Cabeçalho da Tabela */}
      <View style={[styles.tableRow, styles.tableHeader]}>
        <Text style={[styles.tableCell, styles.headerText, { width: '25%' }]}>
          Período
        </Text>
        <Text style={[styles.tableCell, styles.headerText, { width: '25%' }]}>
          Instituição
        </Text>
        <Text style={[styles.tableCell, styles.headerText, { width: '50%' }]}>
          Descrição
        </Text>
      </View>
      {/* Linha 1 */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: '25%' }]}>2021 - 2022</Text>
        <Text style={[styles.tableCell, { width: '25%' }]}>LIQ (Backoffice)</Text>
        <Text style={[styles.tableCell, { width: '50%' }]}>
          Atuava como Backoffice da RAPPI.
        </Text>
      </View>
      {/* Linha 2 */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: '25%' }]}>2022 - Atual</Text>
        <Text style={[styles.tableCell, { width: '25%' }]}>Provider (Operadora)</Text>
        <Text style={[styles.tableCell, { width: '50%' }]}>
          Atua de forma receptiva para o INSS.
        </Text>
      </View>
    </View>
  </View>
);


const Habilidades = () => {
  const softSkills = [
    'Trabalho em equipe',
    'Comunicação',
    'Resolução de problemas',
    'Adaptabilidade',
    'Empatia',
  ];
  const hardSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL'];

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.h2}>Habilidades</Text>
      <Text style={styles.h3}>Soft Skills:</Text>
      {softSkills.map((skill, index) => (
        <Text key={index} style={styles.listItem}>
          • {skill}
        </Text>
      ))}
      <Text style={styles.h3}>Hard Skills:</Text>
      {hardSkills.map((skill, index) => (
        <Text key={index} style={styles.listItem}>
          • {skill}
        </Text>
      ))}
    </View>
  );
};


// --- Componente Principal: App ---
const App = () => {
  const [activeTab, setActiveTab] = useState('Sobre');

  const renderContent = () => {
    switch (activeTab) {
      case 'Sobre':
        return <Sobre />;
      case 'Formação':
        return <Formacao />;
      case 'Experiência':
        return <Experiencia />;
      case 'Habilidades':
        return <Habilidades />;
      default:
        return <Sobre />;
    }
  };

  const tabs = ['Sobre', 'Formação', 'Experiência', 'Habilidades'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img1}
            
            source={require('./assets/file.png')}
          />
          <Text style={styles.nm1}>Ana Carolina Da Silva Santos</Text>
          <Text style={styles.h3}>
            Front-end Developer | HTML | CSS | Javascript | React | Banco de
            Dados(SQL)
          </Text>
        </View>

        <View style={styles.hr} />

        <View style={styles.menu}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.menuBtn,
                activeTab === tab && styles.menuBtnActive, 
              ]}
              onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.menuBtnText,
                  activeTab === tab && styles.menuBtnTextActive,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.hr} />

        <View style={styles.contentArea}>{renderContent()}</View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Ana Carolina Da Silva Santos. Todos os direitos reservados.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d8a3a3',
  },
  container: {
    flexGrow: 1,
    padding: 15,
    fontFamily: 'Arial', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  img1: {
    width: 200, 
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  nm1: {
    color: '#561c24',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  hr: {
    borderBottomColor: '#561c24',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  menuBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12, 
    backgroundColor: 'transparent',
    borderColor: '#561c24',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 3,
  },
  menuBtnActive: {
    backgroundColor: '#561c24',
  },
  menuBtnText: {
    color: '#561c24',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuBtnTextActive: {
    color: '#FFFFFF', 
  },
  contentArea: {
    minHeight: 300, 
  },
  footer: {
    backgroundColor: '#561c24',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    color: '#FFFFFF', 
    textAlign: 'center',
    fontSize: 14,
  },
  // Estilos das Páginas
  pageContainer: {
    padding: 10,
  },
  h2: {
    color: '#561c24',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  h3: {
    color: '#561c24',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 5,
  },
  link: {
    color: '#561c24',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  contatoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  contatoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#561c24',
    marginBottom: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  // Estilos da Tabela
  table: {
    borderWidth: 1,
    borderColor: '#561c24',
    borderRadius: 5,
    overflow: 'hidden', 
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    backgroundColor: '#f0e4e4',
  },
  tableCell: {
    padding: 8,
    fontSize: 14,
    color: '#333',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#561c24',
  },
  
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
});

export default App;
