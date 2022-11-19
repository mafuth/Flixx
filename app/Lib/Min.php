<?php
namespace App\Lib;

class Min{
    public static function output($input){
        $search = array(
            '/\>[^\S ]+/s',     // strip whitespaces after tags, except space
            '/[^\S ]+\</s',     // strip whitespaces before tags, except space
            '/(\s)+/s',         // shorten multiple whitespace sequences
            '/<!--(.|\s)*?-->/' // Remove HTML comments
        );
        
        $replace = array(
            '>',
            '<',
            '\\1',
            ''
        );
        $buffer = $input;
        $buffer = preg_replace($search, $replace, $buffer);
        $buffer = str_replace(array("\r\n", "\r", "\n"), "", $buffer);
        $buffer = str_replace('<img', '<img loading="lazy"', $buffer);
        echo $buffer;
    }
}