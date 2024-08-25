import {
	Image,
	StyleSheet,
	Text,
	Pressable,
	View,
	Modal,
	Alert,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HomeScreen() {
	const [showPopUp, setShowPopUp] = useState(false);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/farm.jpg")}
					style={{
						height: "100%",
						width: "100%",
						bottom: 0,
						left: 0,
						position: "absolute",
					}}
				/>
			}
		>
			<Text
				style={{
					textAlign: "center",
					fontWeight: "600",
					fontSize: 22,
				}}
			>
				Diagnose your plant
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 17,
				}}
			>
				Upload a photo to help us identify any disease or pests.
			</Text>
			<Pressable
				onPress={() => setShowPopUp(true)}
				style={{
					paddingHorizontal: 20,
					paddingVertical: 8,
					borderRadius: 5,
					backgroundColor: "#0ccf37",
					marginHorizontal: "auto",
					marginTop: 16,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						color: "#fff",
					}}
				>
					Scan Plant
				</Text>
			</Pressable>
			<Modal
				animationType="fade"
				transparent
				visible={showPopUp}
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
				onRequestClose={() => {
					setShowPopUp(false);
				}}
			>
				<TouchableWithoutFeedback
					accessible
					onPressOut={() => setShowPopUp(false)}
				>
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							marginTop: 400,
						}}
					>
						<View
							style={{
								backgroundColor: "#ffffff",
								padding: 20,
								position: "absolute",
								width: 400,
								borderRadius: 10,
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 5,
								},
								shadowOpacity: 0.36,
								shadowRadius: 6.68,
								elevation: 11,
							}}
						>
							<Text>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Perspiciatis magnam illum, atque animi facilis, quis eos
								officiis consectetur tenetur itaque blanditiis id,
								exercitationem accusantium vel ratione non. Aliquam, dicta.
								Praesentium!
							</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
});
