import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import GlobalStyle from "../style/GlobalStyle";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal, addGame } from "../redux/Slice";



const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  desc: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm() {

  const dispatch = useDispatch();

  const addGameCloseModal = (values) => {
    dispatch(closeModal());
    dispatch(addGame(values))
  }

  return (
    
    <View style={GlobalStyle.container}>
      <Formik
        initialValues={{ title: '', desc: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addGameCloseModal(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={GlobalStyle.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')} 
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={GlobalStyle.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={GlobalStyle.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('desc')}
              onBlur={props.handleBlur('desc')}
              value={props.values.desc}
            />
            <Text style={GlobalStyle.errorText}>{props.touched.desc && props.errors.desc}</Text>

            <TextInput 
              style={GlobalStyle.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')} 
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Text style={GlobalStyle.errorText}>{props.touched.rating && props.errors.rating}</Text>
            
            <Button color='maroon' title="add" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}