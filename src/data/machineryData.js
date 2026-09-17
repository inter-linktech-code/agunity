import coffeeHuller from "../assets/coffee-huller.jpg";
import coffeeWetPulper from "../assets/coffee-wet-pulper.jpg";
import maizeHullerMill from "../assets/maize-huller-mill.jpg";
import maizeSheller from "../assets/maize-sheller.jpg";
import multipleThresher from "../assets/multiple-thresher.jpg";
import sorghumThresher from "../assets/sorghum-thresher.jpg";
import groundnutThresher from "../assets/groundnut-thresher.jpg";
import riceThresher from "../assets/rice-thresher.jpg";
import riceHuller from "../assets/rice-huller.jpg";
import cassavaChipper from "../assets/cassava-chipper.jpg";
import cassavaMill from "../assets/cassava-mill.jpg";
import milletMill from "../assets/millet-mill.jpg";
import animalFeedMixer from "../assets/animal-feed-mixer.jpg";
import animalFeedMill from "../assets/animal-feed-mill.jpg";
import crusherMachine from "../assets/crusher-machine.jpg";
import brokenMaizeMachine from "../assets/broken-maize-machine.jpg";
import seedCleaner from "../assets/seed-cleaner.jpg";
import bucketElevator from "../assets/bucket-elevator.jpg";
import screwConveyor from "../assets/screw-conveyor.jpg";
import briquetteMachine from "../assets/briquette-machine.jpg";
import silageMachine from "../assets/silage-machine.jpg";
import chaffCutter from "../assets/chaff-cutter.jpg";
import blockMachine from "../assets/block-machine.jpg";

const machineryData = [
  {
    id: "coffee-huller",
    name: "Coffee Huller Machine",
    category: "Coffee Processing",
    image: coffeeHuller,
    description:
      "Efficient coffee hulling machinery fabricated for coffee processors, farmers and agro-processing businesses in Uganda and East Africa.",
    keywords:
      "coffee huller machine Uganda, coffee hulling machine Kampala, coffee processing machine Uganda",
  },

  {
    id: "coffee-wet-pulper",
    name: "Coffee Wet Pulper",
    category: "Coffee Processing",
    image: coffeeWetPulper,
    description:
      "Coffee wet pulping equipment designed for efficient coffee processing and improved handling of harvested coffee.",
    keywords:
      "coffee wet pulper Uganda, coffee processing equipment Kampala, coffee pulping machine East Africa",
  },

  {
    id: "maize-huller-mill",
    name: "Maize Huller & Mill",
    category: "Maize Processing",
    image: maizeHullerMill,
    description:
      "Practical maize hulling and milling machinery for farmers, millers, cooperatives and commercial agro-processors.",
    keywords:
      "maize huller mill Uganda, maize milling machine Kampala, maize processing machine Uganda",
  },

  {
    id: "maize-sheller",
    name: "Maize Sheller",
    category: "Maize Processing",
    image: maizeSheller,
    description:
      "Agricultural maize shelling machinery fabricated for efficient grain separation and post-harvest processing.",
    keywords:
      "maize sheller Uganda, maize shelling machine Kampala, maize processing equipment Uganda",
  },

  {
    id: "multiple-thresher",
    name: "Multiple Thresher",
    category: "Grain Processing",
    image: multipleThresher,
    description:
      "Multi-purpose agricultural thresher suitable for different grain and crop processing applications.",
    keywords:
      "multiple thresher Uganda, agricultural thresher Kampala, grain thresher machine Uganda",
  },

  {
    id: "sorghum-thresher",
    name: "Sorghum Thresher",
    category: "Grain Processing",
    image: sorghumThresher,
    description:
      "Sorghum threshing equipment designed to support efficient post-harvest grain processing.",
    keywords:
      "sorghum thresher Uganda, sorghum processing machine Uganda, grain machinery Kampala",
  },

  {
    id: "gnuts-thresher",
    name: "Groundnut Thresher",
    category: "Grain Processing",
    image: groundnutThresher,
    description:
      "Groundnut threshing machinery for farmers and processors seeking efficient post-harvest processing.",
    keywords:
      "groundnut thresher Uganda, gnut thresher Kampala, groundnut processing machine Uganda",
  },

  {
    id: "rice-thresher",
    name: "Rice Thresher",
    category: "Rice Processing",
    image: riceThresher,
    description:
      "Rice threshing machinery for efficient separation of rice grain from harvested crops.",
    keywords:
      "rice thresher Uganda, rice threshing machine Kampala, rice processing machine Uganda",
  },

  {
    id: "rice-huller",
    name: "Rice Huller",
    category: "Rice Processing",
    image: riceHuller,
    description:
      "Rice hulling machinery designed for rice processors and agricultural businesses across Uganda and East Africa.",
    keywords:
      "rice huller Uganda, rice hulling machine Kampala, rice processing equipment Uganda",
  },

  {
    id: "cassava-chipper",
    name: "Cassava Chipper",
    category: "Cassava Processing",
    image: cassavaChipper,
    description:
      "Cassava chipping machinery for processors looking to improve preparation and processing efficiency.",
    keywords:
      "cassava chipper Uganda, cassava chipping machine Kampala, cassava processing machine Uganda",
  },

  {
    id: "cassava-mill",
    name: "Cassava Mill",
    category: "Cassava Processing",
    image: cassavaMill,
    description:
      "Cassava milling machinery for agricultural processors and businesses producing cassava flour and related products.",
    keywords:
      "cassava mill Uganda, cassava milling machine Kampala, cassava processing equipment Uganda",
  },

  {
    id: "millet-mill",
    name: "Millet Mill",
    category: "Grain Processing",
    image: milletMill,
    description:
      "Millet milling machinery designed for grain processors, farmers and commercial food production.",
    keywords:
      "millet mill Uganda, millet milling machine Kampala, grain milling machine Uganda",
  },

  {
    id: "animal-feed-mixer",
    name: "Animal Feed Mixer",
    category: "Animal Feed",
    image: animalFeedMixer,
    description:
      "Animal feed mixing machinery for livestock farmers and commercial animal feed processors.",
    keywords:
      "animal feed mixer Uganda, feed mixing machine Kampala, animal feed machinery Uganda",
  },

  {
    id: "animal-feed-mill",
    name: "Animal Feed Mill",
    category: "Animal Feed",
    image: animalFeedMill,
    description:
      "Animal feed milling machinery for producing processed feed for livestock and poultry operations.",
    keywords:
      "animal feed mill Uganda, feed milling machine Kampala, animal feed processing Uganda",
  },

  {
    id: "crusher-machine",
    name: "Crusher Machine",
    category: "Processing & Fabrication",
    image: crusherMachine,
    description:
      "Heavy-duty crushing machinery fabricated for suitable agricultural and industrial processing applications.",
    keywords:
      "crusher machine Uganda, crushing machine Kampala, fabrication Uganda",
  },

  {
    id: "broken-maize-machine",
    name: "Broken Maize Machine",
    category: "Maize Processing",
    image: brokenMaizeMachine,
    description:
      "Machinery designed for processing broken maize and related grain handling applications.",
    keywords:
      "broken maize machine Uganda, maize processing machine Kampala, grain processing Uganda",
  },

  {
    id: "seed-cleaner",
    name: "Seed Cleaner",
    category: "Seed Processing",
    image: seedCleaner,
    description:
      "Seed cleaning machinery designed to help remove unwanted materials from harvested grain and seed.",
    keywords:
      "seed cleaner Uganda, seed cleaning machine Kampala, grain cleaning machine Uganda",
  },

  {
    id: "bucket-elevator",
    name: "Bucket Elevator",
    category: "Material Handling",
    image: bucketElevator,
    description:
      "Vertical material handling equipment for moving agricultural products efficiently between processing stages.",
    keywords:
      "bucket elevator Uganda, grain elevator Kampala, agricultural conveyor Uganda",
  },

  {
    id: "screw-conveyor",
    name: "Screw Conveyor",
    category: "Material Handling",
    image: screwConveyor,
    description:
      "Screw conveyor systems for controlled movement of grain, agricultural materials and processed products.",
    keywords:
      "screw conveyor Uganda, agricultural conveyor Kampala, grain conveyor Uganda",
  },

  {
    id: "briquette-machine",
    name: "Briquette Machine",
    category: "Biomass",
    image: briquetteMachine,
    description:
      "Briquette production machinery for converting suitable biomass materials into useful fuel products.",
    keywords:
      "briquette machine Uganda, briquette making machine Kampala, biomass machine Uganda",
  },

  {
    id: "silage-machine",
    name: "Silage Machine",
    category: "Animal Feed",
    image: silageMachine,
    description:
      "Silage processing machinery for livestock farmers and agricultural enterprises.",
    keywords:
      "silage machine Uganda, silage making machine Kampala, animal feed equipment Uganda",
  },

  {
    id: "chaff-cutter",
    name: "Chaff Cutter",
    category: "Animal Feed",
    image: chaffCutter,
    description:
      "Chaff cutting machinery designed for livestock feed preparation and agricultural operations.",
    keywords:
      "chaff cutter Uganda, chaff cutting machine Kampala, livestock feed machine Uganda",
  },

  {
    id: "block-machine",
    name: "Block Machine",
    category: "Construction",
    image: blockMachine,
    description:
      "Block-making machinery for businesses involved in construction material production.",
    keywords:
      "block making machine Uganda, block machine Kampala, construction machinery Uganda",
  },
];

export default machineryData;