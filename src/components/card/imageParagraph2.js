
import React from 'react';
import {
    Box,
    chakra,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  const ImageParagraph = () => {
    // const [image2, setImage2] = useState('');
    // const [heading2, setHeading2] = useState('');
    // const [text2, setText2] = useState('');

    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`${baseUrl}/get-companymessage2`);
    //     const data = response.data
    //     setImage2(`data:image/jpeg;base64,${data.data.companyMsgImage2}`);
    //     setHeading2(data.data.heading2);
    //     setText2(data.data.text2);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
  
    // useEffect(() => {
    //   fetchData();
    // }, []);

    const directorMessageData = {
      image: '1.jpeg',
      title: 'MESSAGE FROM DIRECTOR',
      text: 'Dear Valued Clients and Associates Greeting From SKY WAY MANAGEMENT Since its’ operation SKY WAY Management is always propelled with the Ethic and professionalism at the Top. We are always dedicated to our valued clients for meeting their need at one-go to save the time and effort while recruiting the competent aspirants in the jobs. We have a systematic procedure to hire the candidates in job based on their skills and experience which values for the operations of our valued client for the best out-put throughout the human capital. We have a vast knowing of context of the work and its nature as per the requirement we receive from our clients and accordingly address for the best',
    }

    return (
      <Flex
  
  _dark={{
    bg: "#3e3e3e",
  }}
  p={10}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
  minH={"400px"}
    bg={useColorModeValue('blue.500', 'gray.1000')} 
    color={useColorModeValue('white', 'gray.1000')} 

    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "7xl",
    }}
    w={"full"}
    maxH={"1000px"}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
      base: "lg"
    }}
  >

    <Box
      w={{
        lg: "50%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        roundedLeft={{
          lg: "lg",
        }}
        rounded={{
          base: "lg",
        }}
        bgSize="cover"
        style={{
          backgroundImage:
            `url(/uploads/messageFromDirector/${directorMessageData.image})`,
        }}
        
      ></Box>
    </Box>
    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "2xl",
      }}
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        {" "}
        <chakra.span
          
          _dark={{
            color: "brand.400",
          }}
        >
          {directorMessageData.title}
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        
        _dark={{
          color: "gray.400",
        }}
        align={'left'}
      > {directorMessageData.text} </chakra.p>
    </Box>
  </Box>
</Flex>
    )
  }
  
  export default ImageParagraph