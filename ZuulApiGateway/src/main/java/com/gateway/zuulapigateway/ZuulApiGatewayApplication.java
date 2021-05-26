package com.gateway.zuulapigateway;

import com.gateway.zuulapigateway.filters.ErrorFilter;
import com.gateway.zuulapigateway.filters.PostFilter;
import com.gateway.zuulapigateway.filters.PreFilter;
import com.gateway.zuulapigateway.filters.RouteFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class ZuulApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZuulApiGatewayApplication.class, args);
    }

    @Bean
    public PreFilter preFilter(){
        return new PreFilter();
    }
    @Bean
    public PostFilter postFilter(){
        return new PostFilter();
    }
    @Bean
    public RouteFilter routeFilter(){
        return new RouteFilter();
    }
    @Bean
    public ErrorFilter errorFilter(){
        return new ErrorFilter();
    }
}
