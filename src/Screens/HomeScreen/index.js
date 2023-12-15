import { View, ScrollView, TouchableOpacity } from "react-native"
import styles from "./styles"
import Banner from "../../Components/Banner"
import TabBar from "../../Components/TabBar"
import { } from "react-native-gesture-handler"
import AppButton from "../../Components/AppButton"
import AppText from "../../Components/Text"
import { icons } from "../../assets"
const bullets = []
const renderBullets = () => {
    return bullets.map(bullet => {
        return (
            <TouchableOpacity>
                <AppText></AppText>
                <AppText>

                </AppText>
            </TouchableOpacity>
        )
    })
}
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Banner
                    text='If you are having  emotional stress or suicidal thoughts, 
                    Just tap this red button.
                    
                    (It will auto-dial)'

                />
                <AppButton text="I need some help" icon={icons.callCircle} />
                <AppText>
                    What’s it like to call a help line?
                </AppText>
                <View>
                    <View>
                        <AppText>
                            National Suicide Prevention Hotline:
                        </AppText>
                        <AppText>
                            800-273-8255
                        </AppText>
                    </View>
                    <View>
                        <AppText>
                            National Suicide Prevention Hotline:
                        </AppText>
                        <AppText>
                            800-273-8255
                        </AppText>
                    </View>
                    <View>
                        <AppText>
                            National Suicide Prevention Hotline:
                        </AppText>
                        <AppText>
                            800-273-8255
                        </AppText>
                    </View>
                </View>
                <AppButton text="I could be better" />
                <AppText>
                    Im not really sure
                </AppText>

                <AppButton text="I am pretty good today" />
                <AppText>
                    How can I feel even better
                </AppText>
                <AppText>
                    Scroll down to see even more Help Lines.
                </AppText>
                <AppText>
                    Crisis Intervention / Help Line Numbers
                </AppText>
                <AppText>
                    A special Teen Lifeline is also available in Arizona as a free, confidential 24/7 service for children or teens who can talk to a peer teen counselor
                </AppText>
                <AppText>
                    602.248.8336 (TEEN) or 800.248.8336
                </AppText>
                <AppText>
                    Trained peer teen counselors take calls from 3pm to 9pm every day of the week. At all other times, calls are answered by specially trained crisis intervention specialists. Additionally, TEXT MESSAGES are accepted from noon to 9pm weekdays, and 3-9pm on weekends.
                </AppText>
                <AppText>
                    Here are other Help Lines
                </AppText>
                {renderBullets()}
                <AppText>
                    Essential and local community services
                </AppText>
                <AppText>
                    211
                </AppText>
                <AppText>
                    LGBTQIA+ Community
                </AppText>
                <AppText>
                    Even more Help Lines
                </AppText>
                <AppText>
                    The HelpGuide (HelpGuide.org) is a non-profit guide to mental illness and wellness. Their Directory of International Mental Health Helplines includes numbers for numerous diverse categories in addition to those listed above: Abuse and Domestic Violence, Addiction, ADHD, Alzheimer’s and Dementia, Autism, Caregiving, Eating Disorders, Mental Health, LGBTQ+, Parenting, Teens and Veterans.
                </AppText>
            </ScrollView>

            {/* <TabBar /> */}
        </View>
    )
}
export default HomeScreen