import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import GlobalStyle from "../style/GlobalStyle";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal, updateGame } from "../redux/Slice";

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

export default function UpdateForm({id, title, desc, rating}) {



    console.log(rating)

  const dispatch = useDispatch();

  const updateGameCloseModal = (values) => {
    dispatch(closeModal());
    dispatch(updateGame({id, values}))
  }

  return (
    
    <View style={GlobalStyle.container}>
      <Formik
        initialValues={{ title, desc, rating: rating.toString() }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          updateGameCloseModal(values);
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
            
            <Button color='maroon' title="save" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}