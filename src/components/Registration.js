import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Cropper from "react-cropper";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300,
	},
	radio: {
		display: "flex",
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [value, setValue] = React.useState("female");
	const [image, setImage] = React.useState("");
	const [currentState, setCurrentState] = React.useState("Andaman and Nicobar");
	const [districts, setDistricts] = React.useState([]);
	const [cropData, setCropData] = React.useState("#");
	const [cropper, setCropper] = React.useState();
	const size = useMediaQuery("(min-width:600px)");
	const handleChange = (event) => {
		console.log(event.target.value);
		setValue(event.target.value);
	};
	const handleStateChange = (event) => {
		setCurrentState(event.target.value);
		states.map((state) => {
			if (event.target.value === state.state) {
				setDistricts(state.districts);
			}
		});
	};
	const onImageChange = (e) => {
		e.preventDefault();
		let files;
		if (e.dataTransfer) {
			files = e.dataTransfer.files;
		} else if (e.target) {
			files = e.target.files;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setImage(reader.result);
		};
		reader.readAsDataURL(files[0]);
	};

	const getCropData = () => {
		if (typeof cropper !== "undefined") {
			setCropData(cropper.getCroppedCanvas().toDataURL());
		}
	};
	console.log(currentState);
	var states = [
		{
			state: "Andhra Pradesh",
			districts: [
				"Anantapur",
				"Chittoor",
				"East Godavari",
				"Guntur",
				"Krishna",
				"Kurnool",
				"Nellore",
				"Prakasam",
				"Srikakulam",
				"Visakhapatnam",
				"Vizianagaram",
				"West Godavari",
				"YSR Kadapa",
			],
		},
		{
			state: "Arunachal Pradesh",
			districts: [
				"Tawang",
				"West Kameng",
				"East Kameng",
				"Papum Pare",
				"Kurung Kumey",
				"Kra Daadi",
				"Lower Subansiri",
				"Upper Subansiri",
				"West Siang",
				"East Siang",
				"Siang",
				"Upper Siang",
				"Lower Siang",
				"Lower Dibang Valley",
				"Dibang Valley",
				"Anjaw",
				"Lohit",
				"Namsai",
				"Changlang",
				"Tirap",
				"Longding",
			],
		},
		{
			state: "Assam",
			districts: [
				"Baksa",
				"Barpeta",
				"Biswanath",
				"Bongaigaon",
				"Cachar",
				"Charaideo",
				"Chirang",
				"Darrang",
				"Dhemaji",
				"Dhubri",
				"Dibrugarh",
				"Goalpara",
				"Golaghat",
				"Hailakandi",
				"Hojai",
				"Jorhat",
				"Kamrup Metropolitan",
				"Kamrup",
				"Karbi Anglong",
				"Karimganj",
				"Kokrajhar",
				"Lakhimpur",
				"Majuli",
				"Morigaon",
				"Nagaon",
				"Nalbari",
				"Dima Hasao",
				"Sivasagar",
				"Sonitpur",
				"South Salmara-Mankachar",
				"Tinsukia",
				"Udalguri",
				"West Karbi Anglong",
			],
		},
		{
			state: "Bihar",
			districts: [
				"Araria",
				"Arwal",
				"Aurangabad",
				"Banka",
				"Begusarai",
				"Bhagalpur",
				"Bhojpur",
				"Buxar",
				"Darbhanga",
				"East Champaran (Motihari)",
				"Gaya",
				"Gopalganj",
				"Jamui",
				"Jehanabad",
				"Kaimur (Bhabua)",
				"Katihar",
				"Khagaria",
				"Kishanganj",
				"Lakhisarai",
				"Madhepura",
				"Madhubani",
				"Munger (Monghyr)",
				"Muzaffarpur",
				"Nalanda",
				"Nawada",
				"Patna",
				"Purnia (Purnea)",
				"Rohtas",
				"Saharsa",
				"Samastipur",
				"Saran",
				"Sheikhpura",
				"Sheohar",
				"Sitamarhi",
				"Siwan",
				"Supaul",
				"Vaishali",
				"West Champaran",
			],
		},
		{
			state: "Chandigarh (UT)",
			districts: ["Chandigarh"],
		},
		{
			state: "Chhattisgarh",
			districts: [
				"Balod",
				"Baloda Bazar",
				"Balrampur",
				"Bastar",
				"Bemetara",
				"Bijapur",
				"Bilaspur",
				"Dantewada (South Bastar)",
				"Dhamtari",
				"Durg",
				"Gariyaband",
				"Janjgir-Champa",
				"Jashpur",
				"Kabirdham (Kawardha)",
				"Kanker (North Bastar)",
				"Kondagaon",
				"Korba",
				"Korea (Koriya)",
				"Mahasamund",
				"Mungeli",
				"Narayanpur",
				"Raigarh",
				"Raipur",
				"Rajnandgaon",
				"Sukma",
				"Surajpur  ",
				"Surguja",
			],
		},
		{
			state: "Dadra and Nagar Haveli (UT)",
			districts: ["Dadra & Nagar Haveli"],
		},
		{
			state: "Daman and Diu (UT)",
			districts: ["Daman", "Diu"],
		},
		{
			state: "Delhi (NCT)",
			districts: [
				"Central Delhi",
				"East Delhi",
				"New Delhi",
				"North Delhi",
				"North East  Delhi",
				"North West  Delhi",
				"Shahdara",
				"South Delhi",
				"South East Delhi",
				"South West  Delhi",
				"West Delhi",
			],
		},
		{
			state: "Goa",
			districts: ["North Goa", "South Goa"],
		},
		{
			state: "Gujarat",
			districts: [
				"Ahmedabad",
				"Amreli",
				"Anand",
				"Aravalli",
				"Banaskantha (Palanpur)",
				"Bharuch",
				"Bhavnagar",
				"Botad",
				"Chhota Udepur",
				"Dahod",
				"Dangs (Ahwa)",
				"Devbhoomi Dwarka",
				"Gandhinagar",
				"Gir Somnath",
				"Jamnagar",
				"Junagadh",
				"Kachchh",
				"Kheda (Nadiad)",
				"Mahisagar",
				"Mehsana",
				"Morbi",
				"Narmada (Rajpipla)",
				"Navsari",
				"Panchmahal (Godhra)",
				"Patan",
				"Porbandar",
				"Rajkot",
				"Sabarkantha (Himmatnagar)",
				"Surat",
				"Surendranagar",
				"Tapi (Vyara)",
				"Vadodara",
				"Valsad",
			],
		},
		{
			state: "Haryana",
			districts: [
				"Ambala",
				"Bhiwani",
				"Charkhi Dadri",
				"Faridabad",
				"Fatehabad",
				"Gurgaon",
				"Hisar",
				"Jhajjar",
				"Jind",
				"Kaithal",
				"Karnal",
				"Kurukshetra",
				"Mahendragarh",
				"Mewat",
				"Palwal",
				"Panchkula",
				"Panipat",
				"Rewari",
				"Rohtak",
				"Sirsa",
				"Sonipat",
				"Yamunanagar",
			],
		},
		{
			state: "Himachal Pradesh",
			districts: [
				"Bilaspur",
				"Chamba",
				"Hamirpur",
				"Kangra",
				"Kinnaur",
				"Kullu",
				"Lahaul &amp; Spiti",
				"Mandi",
				"Shimla",
				"Sirmaur (Sirmour)",
				"Solan",
				"Una",
			],
		},
		{
			state: "Jammu and Kashmir",
			districts: [
				"Anantnag",
				"Bandipore",
				"Baramulla",
				"Budgam",
				"Doda",
				"Ganderbal",
				"Jammu",
				"Kargil",
				"Kathua",
				"Kishtwar",
				"Kulgam",
				"Kupwara",
				"Leh",
				"Poonch",
				"Pulwama",
				"Rajouri",
				"Ramban",
				"Reasi",
				"Samba",
				"Shopian",
				"Srinagar",
				"Udhampur",
			],
		},
		{
			state: "Jharkhand",
			districts: [
				"Bokaro",
				"Chatra",
				"Deoghar",
				"Dhanbad",
				"Dumka",
				"East Singhbhum",
				"Garhwa",
				"Giridih",
				"Godda",
				"Gumla",
				"Hazaribag",
				"Jamtara",
				"Khunti",
				"Koderma",
				"Latehar",
				"Lohardaga",
				"Pakur",
				"Palamu",
				"Ramgarh",
				"Ranchi",
				"Sahibganj",
				"Seraikela-Kharsawan",
				"Simdega",
				"West Singhbhum",
			],
		},
		{
			state: "Karnataka",
			districts: [
				"Bagalkot",
				"Ballari (Bellary)",
				"Belagavi (Belgaum)",
				"Bengaluru (Bangalore) Rural",
				"Bengaluru (Bangalore) Urban",
				"Bidar",
				"Chamarajanagar",
				"Chikballapur",
				"Chikkamagaluru (Chikmagalur)",
				"Chitradurga",
				"Dakshina Kannada",
				"Davangere",
				"Dharwad",
				"Gadag",
				"Hassan",
				"Haveri",
				"Kalaburagi (Gulbarga)",
				"Kodagu",
				"Kolar",
				"Koppal",
				"Mandya",
				"Mysuru (Mysore)",
				"Raichur",
				"Ramanagara",
				"Shivamogga (Shimoga)",
				"Tumakuru (Tumkur)",
				"Udupi",
				"Uttara Kannada (Karwar)",
				"Vijayapura (Bijapur)",
				"Yadgir",
			],
		},
		{
			state: "Kerala",
			districts: [
				"Alappuzha",
				"Ernakulam",
				"Idukki",
				"Kannur",
				"Kasaragod",
				"Kollam",
				"Kottayam",
				"Kozhikode",
				"Malappuram",
				"Palakkad",
				"Pathanamthitta",
				"Thiruvananthapuram",
				"Thrissur",
				"Wayanad",
			],
		},
		{
			state: "Lakshadweep (UT)",
			districts: [
				"Agatti",
				"Amini",
				"Androth",
				"Bithra",
				"Chethlath",
				"Kavaratti",
				"Kadmath",
				"Kalpeni",
				"Kilthan",
				"Minicoy",
			],
		},
		{
			state: "Madhya Pradesh",
			districts: [
				"Agar Malwa",
				"Alirajpur",
				"Anuppur",
				"Ashoknagar",
				"Balaghat",
				"Barwani",
				"Betul",
				"Bhind",
				"Bhopal",
				"Burhanpur",
				"Chhatarpur",
				"Chhindwara",
				"Damoh",
				"Datia",
				"Dewas",
				"Dhar",
				"Dindori",
				"Guna",
				"Gwalior",
				"Harda",
				"Hoshangabad",
				"Indore",
				"Jabalpur",
				"Jhabua",
				"Katni",
				"Khandwa",
				"Khargone",
				"Mandla",
				"Mandsaur",
				"Morena",
				"Narsinghpur",
				"Neemuch",
				"Panna",
				"Raisen",
				"Rajgarh",
				"Ratlam",
				"Rewa",
				"Sagar",
				"Satna",
				"Sehore",
				"Seoni",
				"Shahdol",
				"Shajapur",
				"Sheopur",
				"Shivpuri",
				"Sidhi",
				"Singrauli",
				"Tikamgarh",
				"Ujjain",
				"Umaria",
				"Vidisha",
			],
		},
		{
			state: "Maharashtra",
			districts: [
				"Ahmednagar",
				"Akola",
				"Amravati",
				"Aurangabad",
				"Beed",
				"Bhandara",
				"Buldhana",
				"Chandrapur",
				"Dhule",
				"Gadchiroli",
				"Gondia",
				"Hingoli",
				"Jalgaon",
				"Jalna",
				"Kolhapur",
				"Latur",
				"Mumbai City",
				"Mumbai Suburban",
				"Nagpur",
				"Nanded",
				"Nandurbar",
				"Nashik",
				"Osmanabad",
				"Palghar",
				"Parbhani",
				"Pune",
				"Raigad",
				"Ratnagiri",
				"Sangli",
				"Satara",
				"Sindhudurg",
				"Solapur",
				"Thane",
				"Wardha",
				"Washim",
				"Yavatmal",
			],
		},
		{
			state: "Manipur",
			districts: [
				"Bishnupur",
				"Chandel",
				"Churachandpur",
				"Imphal East",
				"Imphal West",
				"Jiribam",
				"Kakching",
				"Kamjong",
				"Kangpokpi",
				"Noney",
				"Pherzawl",
				"Senapati",
				"Tamenglong",
				"Tengnoupal",
				"Thoubal",
				"Ukhrul",
			],
		},
		{
			state: "Meghalaya",
			districts: [
				"East Garo Hills",
				"East Jaintia Hills",
				"East Khasi Hills",
				"North Garo Hills",
				"Ri Bhoi",
				"South Garo Hills",
				"South West Garo Hills ",
				"South West Khasi Hills",
				"West Garo Hills",
				"West Jaintia Hills",
				"West Khasi Hills",
			],
		},
		{
			state: "Mizoram",
			districts: [
				"Aizawl",
				"Champhai",
				"Kolasib",
				"Lawngtlai",
				"Lunglei",
				"Mamit",
				"Saiha",
				"Serchhip",
			],
		},
		{
			state: "Nagaland",
			districts: [
				"Dimapur",
				"Kiphire",
				"Kohima",
				"Longleng",
				"Mokokchung",
				"Mon",
				"Peren",
				"Phek",
				"Tuensang",
				"Wokha",
				"Zunheboto",
			],
		},
		{
			state: "Odisha",
			districts: [
				"Angul",
				"Balangir",
				"Balasore",
				"Bargarh",
				"Bhadrak",
				"Boudh",
				"Cuttack",
				"Deogarh",
				"Dhenkanal",
				"Gajapati",
				"Ganjam",
				"Jagatsinghapur",
				"Jajpur",
				"Jharsuguda",
				"Kalahandi",
				"Kandhamal",
				"Kendrapara",
				"Kendujhar (Keonjhar)",
				"Khordha",
				"Koraput",
				"Malkangiri",
				"Mayurbhanj",
				"Nabarangpur",
				"Nayagarh",
				"Nuapada",
				"Puri",
				"Rayagada",
				"Sambalpur",
				"Sonepur",
				"Sundargarh",
			],
		},
		{
			state: "Puducherry (UT)",
			districts: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
		},
		{
			state: "Punjab",
			districts: [
				"Amritsar",
				"Barnala",
				"Bathinda",
				"Faridkot",
				"Fatehgarh Sahib",
				"Fazilka",
				"Ferozepur",
				"Gurdaspur",
				"Hoshiarpur",
				"Jalandhar",
				"Kapurthala",
				"Ludhiana",
				"Mansa",
				"Moga",
				"Muktsar",
				"Nawanshahr (Shahid Bhagat Singh Nagar)",
				"Pathankot",
				"Patiala",
				"Rupnagar",
				"Sahibzada Ajit Singh Nagar (Mohali)",
				"Sangrur",
				"Tarn Taran",
			],
		},
		{
			state: "Rajasthan",
			districts: [
				"Ajmer",
				"Alwar",
				"Banswara",
				"Baran",
				"Barmer",
				"Bharatpur",
				"Bhilwara",
				"Bikaner",
				"Bundi",
				"Chittorgarh",
				"Churu",
				"Dausa",
				"Dholpur",
				"Dungarpur",
				"Hanumangarh",
				"Jaipur",
				"Jaisalmer",
				"Jalore",
				"Jhalawar",
				"Jhunjhunu",
				"Jodhpur",
				"Karauli",
				"Kota",
				"Nagaur",
				"Pali",
				"Pratapgarh",
				"Rajsamand",
				"Sawai Madhopur",
				"Sikar",
				"Sirohi",
				"Sri Ganganagar",
				"Tonk",
				"Udaipur",
			],
		},
		{
			state: "Sikkim",
			districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
		},
		{
			state: "Tamil Nadu",
			districts: [
				"Ariyalur",
				"Chennai",
				"Coimbatore",
				"Cuddalore",
				"Dharmapuri",
				"Dindigul",
				"Erode",
				"Kanchipuram",
				"Kanyakumari",
				"Karur",
				"Krishnagiri",
				"Madurai",
				"Nagapattinam",
				"Namakkal",
				"Nilgiris",
				"Perambalur",
				"Pudukkottai",
				"Ramanathapuram",
				"Salem",
				"Sivaganga",
				"Thanjavur",
				"Theni",
				"Thoothukudi (Tuticorin)",
				"Tiruchirappalli",
				"Tirunelveli",
				"Tiruppur",
				"Tiruvallur",
				"Tiruvannamalai",
				"Tiruvarur",
				"Vellore",
				"Viluppuram",
				"Virudhunagar",
			],
		},
		{
			state: "Telangana",
			districts: [
				"Adilabad",
				"Bhadradri Kothagudem",
				"Hyderabad",
				"Jagtial",
				"Jangaon",
				"Jayashankar Bhoopalpally",
				"Jogulamba Gadwal",
				"Kamareddy",
				"Karimnagar",
				"Khammam",
				"Komaram Bheem Asifabad",
				"Mahabubabad",
				"Mahabubnagar",
				"Mancherial",
				"Medak",
				"Medchal",
				"Nagarkurnool",
				"Nalgonda",
				"Nirmal",
				"Nizamabad",
				"Peddapalli",
				"Rajanna Sircilla",
				"Rangareddy",
				"Sangareddy",
				"Siddipet",
				"Suryapet",
				"Vikarabad",
				"Wanaparthy",
				"Warangal (Rural)",
				"Warangal (Urban)",
				"Yadadri Bhuvanagiri",
			],
		},
		{
			state: "Tripura",
			districts: [
				"Dhalai",
				"Gomati",
				"Khowai",
				"North Tripura",
				"Sepahijala",
				"South Tripura",
				"Unakoti",
				"West Tripura",
			],
		},
		{
			state: "Uttarakhand",
			districts: [
				"Almora",
				"Bageshwar",
				"Chamoli",
				"Champawat",
				"Dehradun",
				"Haridwar",
				"Nainital",
				"Pauri Garhwal",
				"Pithoragarh",
				"Rudraprayag",
				"Tehri Garhwal",
				"Udham Singh Nagar",
				"Uttarkashi",
			],
		},
		{
			state: "Uttar Pradesh",
			districts: [
				"Agra",
				"Aligarh",
				"Allahabad",
				"Ambedkar Nagar",
				"Amethi (Chatrapati Sahuji Mahraj Nagar)",
				"Amroha (J.P. Nagar)",
				"Auraiya",
				"Azamgarh",
				"Baghpat",
				"Bahraich",
				"Ballia",
				"Balrampur",
				"Banda",
				"Barabanki",
				"Bareilly",
				"Basti",
				"Bhadohi",
				"Bijnor",
				"Budaun",
				"Bulandshahr",
				"Chandauli",
				"Chitrakoot",
				"Deoria",
				"Etah",
				"Etawah",
				"Faizabad",
				"Farrukhabad",
				"Fatehpur",
				"Firozabad",
				"Gautam Buddha Nagar",
				"Ghaziabad",
				"Ghazipur",
				"Gonda",
				"Gorakhpur",
				"Hamirpur",
				"Hapur (Panchsheel Nagar)",
				"Hardoi",
				"Hathras",
				"Jalaun",
				"Jaunpur",
				"Jhansi",
				"Kannauj",
				"Kanpur Dehat",
				"Kanpur Nagar",
				"Kanshiram Nagar (Kasganj)",
				"Kaushambi",
				"Kushinagar (Padrauna)",
				"Lakhimpur - Kheri",
				"Lalitpur",
				"Lucknow",
				"Maharajganj",
				"Mahoba",
				"Mainpuri",
				"Mathura",
				"Mau",
				"Meerut",
				"Mirzapur",
				"Moradabad",
				"Muzaffarnagar",
				"Pilibhit",
				"Pratapgarh",
				"RaeBareli",
				"Rampur",
				"Saharanpur",
				"Sambhal (Bhim Nagar)",
				"Sant Kabir Nagar",
				"Shahjahanpur",
				"Shamali (Prabuddh Nagar)",
				"Shravasti",
				"Siddharth Nagar",
				"Sitapur",
				"Sonbhadra",
				"Sultanpur",
				"Unnao",
				"Varanasi",
			],
		},
		{
			state: "West Bengal",
			districts: [
				"Alipurduar",
				"Bankura",
				"Birbhum",
				"Burdwan (Bardhaman)",
				"Cooch Behar",
				"Dakshin Dinajpur (South Dinajpur)",
				"Darjeeling",
				"Hooghly",
				"Howrah",
				"Jalpaiguri",
				"Kalimpong",
				"Kolkata",
				"Malda",
				"Murshidabad",
				"Nadia",
				"North 24 Parganas",
				"Paschim Medinipur (West Medinipur)",
				"Purba Medinipur (East Medinipur)",
				"Purulia",
				"South 24 Parganas",
				"Uttar Dinajpur (North Dinajpur)",
			],
		},
	];
	return (
		<div>
			<AppBar position='absolute'>
				<Toolbar>
					<img
						src='https://indiaskate.com/skaterbase20/jimages/logo169.png'
						alt='logo'
					/>
					<Typography variant='h6' className={classes.headerText}>
						Registration Form
					</Typography>
				</Toolbar>
			</AppBar>
			<Container component='div' maxWidth='xl'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid container xs={size ? 6 : 12} spacing={2} item>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										autoComplete='name'
										name='firstName'
										variant='outlined'
										required
										fullWidth
										id='firstName'
										label='Name'
										placeholder='Name as in Aadhar'
										autoFocus
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										id='date'
										label='Date of Birth'
										type='date'
										defaultValue='2021-01-01'
										className={classes.textField}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='age'
										label='Age'
										name='age'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='age-grp'
										label='Age group'
										name='age-grp'
										autoComplete='age-grp'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Gender</FormLabel>
										<RadioGroup
											aria-label='gender'
											name='gender1'
											value={value}
											onChange={handleChange}
											row
										>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='female'
													control={<Radio />}
													label='Female'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='male'
													control={<Radio />}
													label='Male'
												/>
											</Grid>
										</RadioGroup>
									</FormControl>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='mobile'
										label='Mobile number'
										id='password'
										type='tel'
										autoComplete='mobile'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='email'
										label='Email address'
										id='email'
										type='email'
										autoComplete='email'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='retype-email'
										label='Retype Email'
										id='retype-email'
										type='retype-email'
										autoComplete='email'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='address-one'
										label='Residential Address(Card will be delivered to this address)'
										id='address-one'
										autoComplete='address-line1'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='address-two'
										label='Address Line 2'
										id='address-two'
										autoComplete='address-line2'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='city'
										label='City'
										id='city'
										autoComplete='address-level2'
									/>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='postal-code'
										label='Pin code'
										id='postal-code'
										autoComplete='postal-code'
									/>
								</Grid>
							</Grid>
							<Grid container xs={size ? 6 : 12} spacing={2} item>
								<Grid item xs={size ? 6 : 12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='blood-group'
										label='Blood Group'
										id='blood-group'
										autoComplete='blood-group'
									/>
								</Grid>
								<Grid item xs={size ? 6 : 12}>
									<FormControl className={classes.formControl}>
										<InputLabel id='designation'>I am</InputLabel>
										<Select
											labelId='designation'
											required
											id='demo-simple-select-placeholder-label'
											value={12}
										>
											<MenuItem value=''>
												<em>None</em>
											</MenuItem>
											<MenuItem value={"school"}>
												Studying in School - STATE Board
											</MenuItem>
											<MenuItem value={"cbse"}>
												Studying in School - CBSE
											</MenuItem>
											<MenuItem value={"icse"}>
												Studying in School - ICSE
											</MenuItem>
											<MenuItem value={"ise"}>
												Studying in School - ISE
											</MenuItem>
											<MenuItem value={"clg-govt"}>
												Studying in School/ College / University
											</MenuItem>
											<MenuItem value={"clg-private"}>
												Studying in School / College / University - Private /
												Open
											</MenuItem>
											<MenuItem value={"working"}>Working</MenuItem>
											<MenuItem value={"business"}>
												Self-Employed / Business
											</MenuItem>
											<MenuItem value={"unemployed"}>Unemployed</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={size ? 6 : 12}>
									<FormControl className={classes.formControl}>
										<InputLabel id='designation'>Residing State</InputLabel>
										<Select
											labelId='designation'
											required
											id='demo-simple-select-placeholder-label'
											value={currentState}
											onChange={handleStateChange}
										>
											{states.map((state) => (
												<MenuItem value={state.state}>{state.state}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={size ? 6 : 12}>
									<FormControl className={classes.formControl}>
										<InputLabel id='designation'>Residing State</InputLabel>
										<Select
											labelId='designation'
											required
											id='demo-simple-select-placeholder-label'
											value={districts}
											onChange={handleStateChange}
										>
											{districts.map((district) => (
												<MenuItem value={district}>{district}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={size ? 6 : 12}>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Discipline</FormLabel>
										<RadioGroup
											aria-label='gender'
											name='gender1'
											value={value}
											onChange={handleChange}
											row
											classes={classes.radio}
										>
											<Grid item xs={8} sm={9}>
												<FormControlLabel
													value='adjustable'
													control={<Radio />}
													label='ADJUSTABLE (TENACITY / BEGINNER SKATES)'
												/>
											</Grid>
											<Grid item xs={6} sm={5}>
												<FormControlLabel
													value='quad'
													control={<Radio />}
													label='SPEED-QUAD'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='inline'
													control={<Radio />}
													label='SPEED-INLINE'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='artistic'
													control={<Radio />}
													label='ARTISTIC'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='roller'
													control={<Radio />}
													label='ROLLER HOCKEY'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='inline-hockey'
													control={<Radio />}
													label='INLINE HOCKEY'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='inline-freestyle'
													control={<Radio />}
													label='INLINE FREESTYLE'
												/>
											</Grid>
										</RadioGroup>
									</FormControl>
								</Grid>
								<Grid item xs={size ? 8 : 12}>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Discipline</FormLabel>
										<RadioGroup
											aria-label='gender'
											name='gender1'
											value={value}
											onChange={handleChange}
											row
										>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='inline-alpine'
													control={<Radio />}
													label='INLINE-ALPINE'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='inline-downhill'
													control={<Radio />}
													label='INLINE-DOWNHILL'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='roller-derby'
													control={<Radio />}
													label='ROLLER DERBY'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='roller-free-style'
													control={<Radio />}
													label='ROLLER FREESTYLE'
												/>
											</Grid>
											<Grid item xs={8} sm={6}>
												<FormControlLabel
													value='skateboarding'
													control={<Radio />}
													label='SKATEBOARDING'
												/>
											</Grid>
										</RadioGroup>
									</FormControl>
								</Grid>
								<Grid item xs={8} sm={6}>
									<Typography>Select Photo</Typography>
									<Button variant='contained' component='label'>
										Upload File
										<input
											type='file'
											accept='.jpeg,.jpg,.png'
											hidden
											onChange={onImageChange}
										/>
									</Button>
								</Grid>
								<Grid item xs={8} sm={6}>
									<Typography>Upload ID proof</Typography>
									<Button variant='contained' component='label'>
										Upload File
										<input type='file' accept='.pdf' hidden />
									</Button>
								</Grid>
								<Grid item xs={8} sm={6}>
									<Cropper
										style={{ height: 400, width: "100%" }}
										initialAspectRatio={1}
										preview='.img-preview'
										src={image}
										viewMode={1}
										guides={true}
										minCropBoxHeight={10}
										minCropBoxWidth={10}
										background={false}
										responsive={true}
										autoCropArea={1}
										checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
										onInitialized={(instance) => {
											setCropper(instance);
										}}
									/>
									{/* <Grid className='img-preview' /> */}
								</Grid>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign Up
						</Button>
					</form>
				</div>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</div>
	);
}
