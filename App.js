import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/61206200" }}
          style={styles.avatar}
        />
        <View style={styles.headerContent}>
          <Text style={styles.name}>Golam Rabbani</Text>
          <Text style={styles.email}>rabbani.cse.eub@gmail.com</Text>
          <Text style={[styles.baseText, { marginTop: 5 }]}>
            Joined 13 Sep 2025
          </Text>
        </View>
      </View>

      {/* About Section */}
      <View>
        <Text style={styles.baseText}>
          I'm a self-motivated MERN stack web expert & developer with a deep
          interest in JavaScript, focused on crafting clean & user-friendly
          experiences. My core skill is based on JavaScript. I like to do most
          of the things using JavaScript, TypeScript, React JS, and Node JS. I
          like planning before doing any project and making the project with
          care, love, and functionality. I am available for any kind of job
          opportunity that suits my interests.
        </Text>
      </View>

      {/* Report Section */}
      <View style={styles.report}>
        <View style={styles.reportCard}>
          <Text style={styles.baseText}>Repos</Text>
          <Text style={[styles.baseText, styles.reportCardText]}>8</Text>
        </View>
        <View style={styles.reportCard}>
          <Text style={styles.baseText}>Followers</Text>
          <Text style={[styles.baseText, styles.reportCardText]}>1032</Text>
        </View>
        <View style={styles.reportCard}>
          <Text style={styles.baseText}>Following</Text>
          <Text style={[styles.baseText, styles.reportCardText]}>9</Text>
        </View>
      </View>

      {/* Skill Section */}
      <View style={styles.skills}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillList}>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>JavaScript</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>React JS</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>Next JS</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>Node JS</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>Express JS</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>Tailwind CSS</Text>
          </View>
          <View style={styles.skill}>
            <Text style={{ color: "#FFF" }}>Mongo DB</Text>
          </View>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.address}>
        <View style={styles.addressCard}>
          <Image
            source={require("./assets/location.png")}
            style={styles.icon}
          />
          <Text style={styles.baseText}>Dhaka, Bangladesh</Text>
        </View>
        <View style={styles.addressCard}>
          <Image source={require("./assets/github.png")} style={styles.icon} />
          <Text style={styles.baseText}>https://github.com/rabbanidev</Text>
        </View>
        <View style={styles.addressCard}>
          <Image source={require("./assets/network.png")} style={styles.icon} />
          <Text style={styles.baseText}>https://golamrabbani.netlify.app</Text>
        </View>
        <View style={styles.addressCard}>
          <Image
            source={require("./assets/facebook.png")}
            style={styles.icon}
          />
          <Text style={styles.baseText}>
            https://www.facebook.com/golam.rabbani.eub
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingVertical: 30,
    paddingHorizontal: 20,
    rowGap: 30,
  },

  // Base text
  baseText: {
    fontSize: 17,
    color: "gray",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    fontWeight: "500", // medium weight
    color: "#374e83",
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerContent: {
    flex: 1,
  },

  // Report section
  report: {
    borderRadius: 10,
    flexDirection: "row",
  },
  reportCard: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // Android Shadow
    elevation: 4,
  },
  reportCardText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },

  // Skill Section
  skills: {},
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  skillList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skill: {
    backgroundColor: "#374e83",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  // Address section
  address: {
    rowGap: 15,
  },
  addressCard: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
