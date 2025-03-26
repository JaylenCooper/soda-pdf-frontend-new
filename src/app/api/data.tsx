import { IconType } from 'react-icons';
import {
  MdPreview,
  MdCreateNewFolder,
  MdOutlineCallSplit,
  MdEditNote,
  MdOutlineCompress,
  MdOutlinePictureAsPdf,
  MdOutlineBatchPrediction,
  MdAssignmentInd
} from 'react-icons/md'

import { IoGitMerge } from 'react-icons/io5'
import {
  SiConvertio,
  SiGoogleforms,
  SiBookmeter,
  SiGnuemacs
} from 'react-icons/si'
import { BiSolidCommentEdit, BiSupport } from 'react-icons/bi'
import { RiSecurePaymentLine, RiToolsFill, RiHandbagLine } from 'react-icons/ri'
import { GrResources } from 'react-icons/gr'


export const FeaturesDataFree: {
  imgSrc: string;
  heading: string;
  subheading: string;
  icon: IconType;
  color: string;
}[] = [
    {
      icon: MdPreview,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "View",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
      color: '#ff6166',
    },
    {
      icon: MdCreateNewFolder,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Create",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
      color: '#ff9b50',
    },
    {
      icon: IoGitMerge,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Merge",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
      color: '#3fbfb0',
    },
    {
      icon: MdOutlineCallSplit,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Split",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
      color: '#52b173',
    }

  ]

export const FeaturesDataPopular: {
  imgSrc: string;
  heading: string;
  subheading: string;
  icon: IconType;
  color: string;
}[] = [
    {
      icon: MdEditNote,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Edit",
      subheading: "Gain full editing control over any PDF document",
      color: '#49bde2',
    },
    {
      icon: MdOutlineCompress,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Compress",
      subheading: "Reduce the size of any PDF without affecting file quality",
      color: '#ff9b50',
    },
    {
      icon: SiGoogleforms,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Page",
      subheading: "Rotate, reorder, add or remove pages from any PDF document",
      color: '#9567e3',
    },
    {
      icon: SiConvertio,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Convert",
      subheading: "Convert PDFs to or from MS Office files, images & more",
      color: '#ff6166',
    }

  ]
  
export const FeaturesDataEssential: {
  imgSrc: string;
  heading: string;
  subheading: string;
  icon: IconType;
  color: string;
}[] = [
    {
      icon: BiSolidCommentEdit,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Comment",
      subheading: "Annotate directly on PDF using sticker notes, comments & more",
      color: '#ff9b50',
    },
    {
      icon: MdOutlineBatchPrediction,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Batch",
      subheading: "Create & convert a batch of files or folders in one click",
      color: '#ff6166',
    },
    {
      icon: RiSecurePaymentLine,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Secure",
      subheading: "Protect PDF documents by adding 256-AES password encryption",
      color: '#49bde2',
    },
    {
      icon: MdOutlinePictureAsPdf,
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Forms",
      subheading: "Create fillable PDF forms, or fill any existing form with ease",
      color: '#9567e3',
    }

  ]

export const FeaturesDataAdvanced: {
    imgSrc: string;
    heading: string;
    subheading: string;
    icon: IconType;
    color: string;
  }[] = [
      {
        icon: SiBookmeter,
        imgSrc: '/images/Features/featureOne.svg',
        heading: "OCR",
        subheading: "Recognize & edit text within any scanned document or image",
        color: '#3fbfb0',
      },
      {
        icon: MdAssignmentInd,
        imgSrc: '/images/Features/featureOne.svg',
        heading: "E-Sign",
        subheading: "Electronically sign PDFs and track & manage e-signatures in real-time",
        color: '#9567e3',
      },
      {
        icon: RiToolsFill,
        imgSrc: '/images/Features/featureOne.svg',
        heading: "Online Tools",
        subheading: "Get access to all of our Online PDF tools & services",
        color: '#52b173',
      },
      {
        icon: GrResources,
        imgSrc: '/images/Features/featureOne.svg',
        heading: "See more",
        subheading: "Click here to see more PDF tools & services",
        color: '#b15273',
      }
  
    ]
export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
    {
      profession: 'Senior',
      name: 'John Pappas',
      imgSrc: '/images/Expert/boyone.png',
    },
    {
      profession: 'Junior',
      name: 'Alexandra Stewart',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Junior',
      name: 'Harry Bennit',
      imgSrc: '/images/Expert/boytwo.png',
    },
    {
      profession: 'Senior',
      name: 'John Pappas',
      imgSrc: '/images/Expert/boyone.png',
    },
    {
      profession: 'Junior',
      name: 'Alexandra Stewart',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Junior',
      name: 'Harry Bennit',
      imgSrc: '/images/Expert/boytwo.png',
    },
  ]

// data.tsx
export const galleryImages = [
  { src: '/images/Gallery/foodone.jpg', name: 'Group 1', member: 35 },
  { src: '/images/Gallery/foodtwo.jpg', name: 'Group 2', member: 17 },
  { src: '/images/Gallery/foodthree.jpg', name: 'Group 3', member: 45 },
  { src: '/images/Gallery/foodfour.jpg', name: 'Group 4', member: 27 },
];
